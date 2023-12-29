import { IsNumber, IsString, Length, MinLength } from 'class-validator';

export class CreateBicycleDto {
  @IsString()
  @MinLength(5)
  name: string;

  @IsString()
  @MinLength(5)
  type: string;

  @IsString()
  @MinLength(3)
  color: string;

  @IsNumber()
  wheelSize: number;

  @IsNumber()
  price: number;

  @IsString()
  @Length(5, 200)
  description: string;

  @IsString()
  @MinLength(5)
  id: string;
}
