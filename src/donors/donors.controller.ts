import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DonorsService } from './donors.service';
import { CreateDonorDto } from './dto/create-donor.dto';

@Controller('donors')
export class DonorsController {
  constructor(private readonly donorsService: DonorsService) {}

  @Post('create')
  create(@Body() donorDto: CreateDonorDto) {
    return this.donorsService.createDonor(donorDto);
  }

  @Get()
  findAll() {
    return this.donorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.donorsService.findOne(id);
  }

  @Patch('update/:id')
  updateDonor(@Param('id') id: string, @Body() donorDto: CreateDonorDto) {
    return this.donorsService.updateDonor(id, donorDto);
  }

  @Delete(':id')
  removeDonor(@Param('id') id: string) {
    return this.donorsService.removeDonor(id);
  }
}
