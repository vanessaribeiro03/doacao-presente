import { Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { DonationsService } from './donations.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Donations')
@Controller('donations')
export class DonationsController {
  constructor(private readonly donationsService: DonationsService) {}

  @Post('create/:donorId')
  create(@Param('donorId') donorId: string) {
    return this.donationsService.create(donorId);
  }

  @Get()
  findAll() {
    return this.donationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.donationsService.findOne(id);
  }

  @Get('donor/:donorId')
  findByDonorId(@Param('donorId') donorId: string) {
    return this.donationsService.findByDonorId(donorId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.donationsService.remove(id);
  }
}
