import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsNumber,
} from 'class-validator';

export class CreateDonorDto {
  @IsNotEmpty()
  @IsString()
  public fullName: string;

  @IsNotEmpty()
  @IsNumber()
  public age: number;

  @IsNotEmpty()
  @IsString()
  public bloodType: string;

  @IsOptional()
  @IsString()
  public adress?: string;

  @IsNotEmpty()
  @IsString()
  public phoneNumber: string;

  @IsNotEmpty()
  @IsEmail()
  public email: string;
}
