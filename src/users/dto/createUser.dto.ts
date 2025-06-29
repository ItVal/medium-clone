import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
    @IsString()
    username: string;
    @IsString()
    @IsEmail()
    email: string;
    @IsString()
    password : string;
  
}
