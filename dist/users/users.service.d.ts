import { PrismaService } from '../prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<void>;
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
}
