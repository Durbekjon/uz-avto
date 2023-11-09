import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator'

export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  fname: string
  @IsNotEmpty()
  @IsString()
  lname: string
  @IsEmail()
  email: string
  @IsNotEmpty()
  @IsNumber()
  @Min(9)
  phone_number: number
  @IsNotEmpty()
  @IsString()
  password: string
}
export class LoginDto {
  @IsEmail()
  email: string
  @IsNotEmpty()
  password: string
}
