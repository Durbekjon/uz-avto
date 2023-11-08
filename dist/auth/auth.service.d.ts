import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { Tokens } from './type/tokens.type';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    getAll(): Promise<{
        id: number;
        fname: string;
        lname: string;
        email: string;
        phone_number: string;
        password: string;
        token: string;
        created_at: Date;
        updatedAt: Date;
    }[]>;
    register(dto: RegisterDto): Promise<Tokens>;
    login(dto: LoginDto): Promise<Tokens>;
    logout(id: any): Promise<void>;
    dataHasher(data: string): Promise<any>;
    getTokens(id: number, email: string): Promise<Tokens>;
    updateTokens(id: number, rt: string): Promise<{
        id: number;
        fname: string;
        lname: string;
        email: string;
        phone_number: string;
        password: string;
        token: string;
        created_at: Date;
        updatedAt: Date;
    }>;
}