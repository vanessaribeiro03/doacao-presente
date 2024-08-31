import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMailDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public to: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public subject: string;
}
