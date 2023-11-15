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
exports.ContractsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ContractsService = class ContractsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll() {
        return await this.prisma.contracts.findMany({
            include: {
                client: true,
                car: true,
            },
        });
    }
    async getPaginated(page) {
        return await this.prisma.contracts.findMany({
            take: 10,
            orderBy: {
                id: 'desc',
            },
            skip: 10 * (page - 1),
        });
    }
    async getUnique(id) {
        const contract = this.prisma.contracts.findUnique({
            where: {
                id: id,
            },
        });
        if (contract) {
            return contract;
        }
        else {
            throw new common_1.NotFoundException(`Contract data with id: '${id}' not found`);
        }
    }
    async create(dto) {
        const nav = await this.prisma.contracts.findMany();
        const navbat = nav.length + 1;
        const newContract = await this.prisma.contracts.create({
            data: {
                navbat: nav.length === 0 ? 1 : navbat,
                ready_date: dto.ready_date,
                client: {
                    connect: {
                        id: dto.client,
                    },
                },
                car: {
                    connect: {
                        id: dto.car,
                    },
                },
                payment: dto.payment,
            },
        });
        const car = this.prisma.cars.findUnique({
            where: {
                id: dto.car,
            },
        });
        if (newContract.payment === true && (await car).car_price !== 0) {
            await this.addToCash((await car).car_price);
        }
        return newContract;
    }
    async update(id, dto) {
        const extContract = await this.prisma.contracts.findUnique({
            where: {
                id: id,
            },
        });
        if (extContract) {
            return await this.prisma.contracts.update({
                where: {
                    id: id,
                },
                data: {
                    ready_date: dto.ready_date,
                    client: {
                        connect: {
                            id: dto.client,
                        },
                    },
                    car: {
                        connect: {
                            id: dto.car,
                        },
                    },
                    payment: dto.payment,
                },
            });
        }
        else {
            throw new common_1.NotFoundException(`Contract data with id: '${id}' not found`);
        }
    }
    async delete(id) {
        const extContract = await this.prisma.contracts.findUnique({
            where: {
                id: id,
            },
        });
        if (extContract) {
            await this.prisma.contracts.delete({
                where: {
                    id: id,
                },
            });
        }
        else {
            throw new common_1.NotFoundException(`Contract data with id: '${id}' not found`);
        }
    }
    async addToCash(price) {
        const cash = this.prisma.cash.findMany({});
        if ((await cash).length === 0) {
            this.prisma.cash.create({
                data: {
                    cash: 0,
                },
            });
        }
        else {
            const oldCash = this.prisma.cash.findUnique({
                where: {
                    id: 1,
                },
            });
            const money = (await oldCash).cash + price;
            this.prisma.cash.update({
                where: {
                    id: 1,
                },
                data: {
                    cash: money,
                },
            });
        }
    }
};
exports.ContractsService = ContractsService;
exports.ContractsService = ContractsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ContractsService);
//# sourceMappingURL=contracts.service.js.map