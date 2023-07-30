import { IsNotEmpty } from '@nestjs/class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  readonly itemId: string;
  
  @IsNotEmpty()
  readonly quantity: number;
}