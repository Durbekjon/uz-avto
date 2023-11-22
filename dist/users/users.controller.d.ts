import { UsersService } from './users.service';
import { Request } from 'express';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    search(search: string): Promise<{
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
    }[]>;
    getUnique(id: number): Promise<{
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
    }>;
    getAll(): Promise<void>;
    setAdmin(req: Request): Promise<void>;
}
