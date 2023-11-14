import { PrismaService } from '../prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<void>;
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
}
