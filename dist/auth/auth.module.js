"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const prisma_service_1 = require("../prisma/prisma.service");
const common_1 = require("@nestjs/common");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const at_strategy_1 = require("../users/strategies/at.strategy");
const rt_strategy_1 = require("../users/strategies/rt.strategy");
const jwt_1 = require("@nestjs/jwt");
const mailer_1 = require("@nestjs-modules/mailer");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, at_strategy_1.AtStrategy, rt_strategy_1.RtStrategy, prisma_service_1.PrismaService, jwt_1.JwtService],
        imports: [
            jwt_1.JwtModule.register({}),
            mailer_1.MailerModule.forRoot({
                transport: {
                    host: 'smtp.elasticemail.com',
                    port: 2525,
                    auth: {
                        user: 'durbeksaydaliyev798@gmail.com',
                        pass: 'BC1F92BA6621B95F407D72873229DBBB1064',
                    },
                },
                defaults: {
                    from: '"Durbekjon" <durbeksaydaliyev798@gmail.com>',
                },
            }),
        ],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map