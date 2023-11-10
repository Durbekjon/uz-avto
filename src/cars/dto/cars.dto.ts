import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CarsDto {
  @ApiProperty({
    description: 'Confrim the example',
    example: 'McLaren',
  })
  @IsNotEmpty()
  @IsString()
  car_name: string
  @ApiProperty({
    description: 'Confrim the example',
    example: 4,
  })
  @IsNotEmpty()
  @IsNumber()
  car_position: number
  @ApiProperty({
    description: 'Confrim the example',
    example: 2022,
  })
  @IsNotEmpty()
  @IsNumber()
  year: number
  @ApiProperty({
    description: 'Confrim the example',
    example: 234000000000,
  })
  @IsNotEmpty()
  @IsNumber()
  car_price: number
}
