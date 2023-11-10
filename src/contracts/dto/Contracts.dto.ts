import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class ContractsDto {
  navbat: number
  @ApiProperty({
    description: 'Confrim the example',
    example: '2023 5-december',
  })
  @IsNotEmpty()
  @IsString()
  ready_date: string
  @ApiProperty({
    description: 'Confrim the example',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  client: number
  @ApiProperty({
    description: 'Confrim the example',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  car: number
  @ApiProperty({
    description: 'Confrim the example',
    example: true,
  })
  @IsNotEmpty()
  @IsBoolean()
  payment: boolean
}
