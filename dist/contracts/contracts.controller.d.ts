import { ContractsService } from "./contracts.service";
import { ContractsDto } from "./dto/Contracts.dto";
export declare class ContractsController {
    private contractsService;
    constructor(contractsService: ContractsService);
    getAll(uid: number): Promise<MethodDecorator | ({
        car: {
            id: number;
            car_name: string;
            car_position: number;
            year: number;
            car_price: number;
            created_at: Date;
            updatedAt: Date;
        };
        client: {
            id: number;
            fname: string;
            email: string;
            password: string;
            token: string;
            created_at: Date;
            lname: string;
            updatedAt: Date;
            role: import(".prisma/client").$Enums.Role;
            phone_number: number;
        };
    } & {
        id: number;
        navbat: number;
        ready_date: string;
        clientId: number;
        carId: number;
        payment: boolean;
        created_at: Date;
        updatedAt: Date;
    })[]>;
    getPaginated(uid: number, page: number): Promise<MethodDecorator | {
        id: number;
        navbat: number;
        ready_date: string;
        clientId: number;
        carId: number;
        payment: boolean;
        created_at: Date;
        updatedAt: Date;
    }[]>;
    getUnique(uid: number, id: number): Promise<{
        id: number;
        navbat: number;
        ready_date: string;
        clientId: number;
        carId: number;
        payment: boolean;
        created_at: Date;
        updatedAt: Date;
    } | MethodDecorator>;
    create(uid: number, dto: ContractsDto): Promise<{
        id: number;
        navbat: number;
        ready_date: string;
        clientId: number;
        carId: number;
        payment: boolean;
        created_at: Date;
        updatedAt: Date;
    } | MethodDecorator>;
    update(uid: number, id: number, dto: ContractsDto): Promise<{
        id: number;
        navbat: number;
        ready_date: string;
        clientId: number;
        carId: number;
        payment: boolean;
        created_at: Date;
        updatedAt: Date;
    } | MethodDecorator>;
    delete(uid: number, id: number): Promise<void>;
}
