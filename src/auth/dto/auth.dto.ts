import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  fname: string;
  @IsNotEmpty()
  @IsString()
  lname: string;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsString()
  phone_number: string;
  @IsNotEmpty()
  @IsString()
  password: string;
}
export class LoginDto {
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
}
