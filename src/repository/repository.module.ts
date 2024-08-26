import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Donor } from 'src/donors/entities/donor.entity';
import { DonorRepository } from './donor.repository';
import { DonationRepository } from './donation.repository';
import { Donation } from 'src/donations/entities/donation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Donor, Donation])],
  providers: [
    DonorRepository,
    { provide: 'IDonorRepository', useClass: DonorRepository },
    DonationRepository,
    { provide: 'IDonationRepository', useClass: DonationRepository },
  ],
  exports: ['IDonorRepository', 'IDonationRepository'],
})
export class RepositoryModule {}
