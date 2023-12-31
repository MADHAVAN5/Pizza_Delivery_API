import { IsEmail, IsNotEmpty } from '@nestjs/class-validator';

export class CreateCartDto {
  @IsNotEmpty()
  readonly itemId: string;
  
  @IsNotEmpty()
  readonly quantity: number;
}