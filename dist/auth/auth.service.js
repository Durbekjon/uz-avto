"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const prisma_service_1 = require("../prisma/prisma.service");
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async getAll() {
        return this.prisma.user.findMany();
    }
    async register(dto) {
        const password = await this.dataHasher(dto.password);
        const existingUser = await this.prisma.user.findUnique({
            where: {
                email: dto.email,
            },
        });
        if (existingUser) {
            const passwordMatches = await bcrypt.compare(dto.password, existingUser.password);
            if (passwordMatches) {
                const tokens = await this.getTokens(existingUser.id, existingUser.email);
                await this.updateTokens(existingUser.id, tokens.refresh_token);
                return tokens;
            }
            else {
                throw new common_1.ForbiddenException("User already registered");
            }
        }
        else {
            const newUser = await this.prisma.user.create({
                data: {
                    fname: dto.fname,
                    lname: dto.lname,
                    email: dto.email,
                    phone_number: dto.phone_number,
                    password,
                },
            });
            const tokens = await this.getTokens(newUser.id, newUser.email);
            await this.updateTokens(newUser.id, tokens.refresh_token);
            return tokens;
        }
    }
    async login(dto) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email,
            },
        });
        if (!user) {
            throw new common_1.ForbiddenException("User not found");
        }
        const passwordMathes = bcrypt.compare(dto.password, user.password);
        if (!passwordMathes)
            throw new common_1.ForbiddenException("password did not match");
        const tokens = await this.getTokens(user.id, user.email);
        return await this.updateTokens(user.id, tokens.refresh_token), tokens;
    }
    async logout(id) {
        const userId = Number(id);
        await this.prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                token: null,
            },
        });
    }
    async dataHasher(data) {
        return bcrypt.hash(data, 10);
    }
    async getTokens(id, email) {
        const [at, rt] = await Promise.all([
            this.jwtService.signAsync({
                sub: id,
                email,
            }, {
                secret: "at-secret",
                expiresIn: 60 * 15,
            }),
            this.jwtService.signAsync({
                sub: id,
                email,
            }, {
                secret: "at-secret",
                expiresIn: 60 * 60 * 24 * 7,
            }),
        ]);
        return {
            access_token: at,
            refresh_token: rt,
        };
    }
    async updateTokens(id, rt) {
        const hashedToken = await this.dataHasher(rt);
        return await this.prisma.user.update({
            where: {
                id,
            },
            data: {
                token: hashedToken,
            },
        });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map