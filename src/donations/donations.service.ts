import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IDonationRepository } from 'src/interfaces/donation.interface';
import { IDonorRepository } from 'src/interfaces/donor.interface';
import { Donation } from './entities/donation.entity';

@Injectable()
export class DonationsService {
  constructor(
    @Inject('IDonationRepository')
    private readonly donationRepository: IDonationRepository,
    @Inject('IDonorRepository')
    private readonly donorRepository: IDonorRepository,
  ) {}

  async create(donorId: string): Promise<Donation> {
    const donor = await this.donorRepository.findById(donorId);

    const newDonation = new Donation();
    newDonation.donor = donor;

    return await this.donationRepository.save(newDonation);
  }

  async findAll(): Promise<Donation[]> {
    return await this.donationRepository.findAll();
  }

  async findOne(id: string) {
    const donation = await this.donationRepository.findById(id);
    if (!donation) {
      throw new NotFoundException('Donation not found');
    }
    return donation;
  }

  async findByDonorId(donorId: string): Promise<Donation[]> {
    const donations = await this.donationRepository.findByDonorId(donorId);
    if (donations.length === 0) {
      throw new NotFoundException(
        `No donations found for donor with ID ${donorId}`,
      );
    }
    return donations;
  }

  async remove(id: string): Promise<boolean> {
    const donation = await this.findOne(id);
    return await this.donationRepository.delete(donation.id);
  }
}
