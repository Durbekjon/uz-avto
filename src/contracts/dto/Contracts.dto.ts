import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ContractsDto {
  navbat: number;
  @IsNotEmpty()
  @IsString()
  ready_date: string;
  @IsNotEmpty()
  @IsNumber()
  client: number;
  @IsNotEmpty()
  @IsNumber()
  car: number;
  @IsNotEmpty()
  @IsBoolean()
  payment: boolean;
}
