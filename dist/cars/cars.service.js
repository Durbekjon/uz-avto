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
exports.CarsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CarsService = class CarsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll() {
        return await this.prisma.cars.findMany();
    }
    async getUnique(id) {
        return this.prisma.cars.findUnique({
            where: {
                id: Number(id),
            },
        });
    }
    async create(dto) {
        return await this.prisma.cars.create({
            data: {
                car_name: dto.car_name,
                car_position: dto.car_position,
                year: dto.year,
                car_price: dto.car_price,
            },
        });
    }
    async update(id, dto) {
        return await this.prisma.cars.update({
            where: {
                id: Number(id),
            },
            data: {
                car_name: dto.car_name,
                car_position: dto.car_position,
                year: dto.year,
                car_price: dto.car_price,
            },
        });
    }
    async delete(id) {
        await this.prisma.cars.delete({
            where: {
                id: Number(id),
            },
        });
    }
};
exports.CarsService = CarsService;
exports.CarsService = CarsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CarsService);
//# sourceMappingURL=cars.service.js.map