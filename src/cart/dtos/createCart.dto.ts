import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateCartDto {
  @IsNotEmpty()
  readonly itemId: string;
  
  @IsNotEmpty()
  readonly quantity: number;
}