import { ContractsService } from './contracts.service';
import { ContractsDto } from './dto/Contracts.dto';
export declare class ContractsController {
    private contractsService;
    constructor(contractsService: ContractsService);
    getAll(): Promise<({
        client: {
            id: number;
            fname: string;
            lname: string;
            email: string;
            phone_number: number;
            role: import(".prisma/client").$Enums.Role;
            password: string;
            token: string;
            created_at: Date;
            updatedAt: Date;
        };
        car: {
            id: number;
            car_name: string;
            car_position: number;
            year: number;
            car_price: number;
            created_at: Date;
            updatedAt: Date;
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
    getPaginated(page: number): Promise<{
        id: number;
        navbat: number;
        ready_date: string;
        clientId: number;
        carId: number;
        payment: boolean;
        created_at: Date;
        updatedAt: Date;
    }[]>;
    getUnique(id: number): Promise<{
        id: number;
        navbat: number;
        ready_date: string;
        clientId: number;
        carId: number;
        payment: boolean;
        created_at: Date;
        updatedAt: Date;
    }>;
    create(dto: ContractsDto): Promise<{
        id: number;
        navbat: number;
        ready_date: string;
        clientId: number;
        carId: number;
        payment: boolean;
        created_at: Date;
        updatedAt: Date;
    }>;
    update(id: number, dto: ContractsDto): Promise<{
        id: number;
        navbat: number;
        ready_date: string;
        clientId: number;
        carId: number;
        payment: boolean;
        created_at: Date;
        updatedAt: Date;
    }>;
    delete(id: number): Promise<void>;
}
