import { UsersService } from './users.service';
import { Request } from 'express';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    search(search: string): Promise<{
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
    }[]>;
    getUnique(id: number): Promise<{
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
    }>;
    getAll(): Promise<void>;
    setAdmin(req: Request): Promise<void>;
}
