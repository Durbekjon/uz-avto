import { CarsService } from './cars.service';
import { CarsDto } from './dto/cars.dto';
export declare class CarsController {
    private carsService;
    constructor(carsService: CarsService);
    getAll(): Promise<{
        id: number;
        car_name: string;
        car_position: number;
        year: number;
        car_price: number;
        created_at: Date;
        updatedAt: Date;
    }[]>;
    getUnique(id: number): Promise<{
        id: number;
        car_name: string;
        car_position: number;
        year: number;
        car_price: number;
        created_at: Date;
        updatedAt: Date;
    }>;
    create(dto: CarsDto): Promise<{
        id: number;
        car_name: string;
        car_position: number;
        year: number;
        car_price: number;
        created_at: Date;
        updatedAt: Date;
    }>;
    update(id: number, dto: CarsDto): Promise<{
        id: number;
        car_name: string;
        car_position: number;
        year: number;
        car_price: number;
        created_at: Date;
        updatedAt: Date;
    }>;
    delete(id: number): Promise<void>;
}
