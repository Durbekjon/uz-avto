import { ApiProperty } from '@nestjs/swagger'
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator'

export class RegisterDto {
  @ApiProperty({
    description: 'Confrim the name',
    example: 'John',
  })
  @IsNotEmpty()
  @IsString()
  fname: string

  @ApiProperty({
    description: 'Confrim the last name',
    example: 'Doe',
  })
  @IsNotEmpty()
  @IsString()
  lname: string
  @IsEmail()
  @ApiProperty({
    description: 'Confrim the email',
    example: 'JohnDoe989@gmail.com',
  })
  email: string
  @ApiProperty({
    description: 'Confrim the Number',
    example: 99997642,
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(9)
  phone_number: number
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Confrim the passwrod',
    example: 'bfebu/3#3.4hr943,ye:o',
  })
  password: string
}
export class LoginDto {
  @ApiProperty({
    description: 'Confrim the email',
    example: 'JohnDoe989@gmail.com',
  })
  @IsEmail()
  email: string
  @ApiProperty({
    description: 'Confrim the example',
    example: 'bfebu/3#3.4hr943,ye:o',
  })
  @IsNotEmpty()
  password: string
}
