import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { Request } from 'express';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
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
    register(dto: RegisterDto): Promise<import("./type/tokens.type").Tokens>;
    login(dto: LoginDto): Promise<import("./type/tokens.type").Tokens>;
    logout(req: Request): Promise<void>;
}
