import { PrismaService } from "../prisma/prisma.service";
import { LoginDto, RegisterDto } from "./dto/auth.dto";
import { Tokens } from "./type/tokens.type";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    getAll(): Promise<{
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
    register(dto: RegisterDto): Promise<Tokens>;
    login(dto: LoginDto): Promise<Tokens>;
    logout(id: any): Promise<void>;
    dataHasher(data: string): Promise<any>;
    getTokens(id: number, email: string): Promise<Tokens>;
    updateTokens(id: number, rt: string): Promise<{
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
}
