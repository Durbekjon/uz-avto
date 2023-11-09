import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { Request } from 'express';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    getAll(): Promise<{
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
    register(dto: RegisterDto): Promise<import("./type/tokens.type").Tokens>;
    login(dto: LoginDto): Promise<import("./type/tokens.type").Tokens>;
    logout(req: Request): Promise<void>;
}
