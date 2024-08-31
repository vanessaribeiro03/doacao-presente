import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsNumber,
} from 'class-validator';

export class CreateDonorDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public fullName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  public age: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  public adress?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public phoneNumber: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  public email: string;
}
