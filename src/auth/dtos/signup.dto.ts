import { IsEmail, IsNotEmpty } from '@nestjs/class-validator';

export class SignUpDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
  
  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  address: string;
}