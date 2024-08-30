import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Donation } from 'src/donations/entities/donation.entity';
import { IDonationRepository } from 'src/interfaces/donation.interface';
import { Repository } from 'typeorm';

@Injectable()
export class DonationRepository implements IDonationRepository {
  constructor(
    @InjectRepository(Donation)
    private readonly donationRepository: Repository<Donation>,
  ) {}

  async findAll(): Promise<Donation[]> {
    return await this.donationRepository.find({ relations: ['donor'] });
  }

  async findById(id: string): Promise<Donation> {
    return await this.donationRepository.findOne({
      where: { id },
      relations: ['donor'],
    });
  }

  async save(donation: Donation): Promise<Donation> {
    return await this.donationRepository.save(donation);
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.donationRepository.delete(id);
    return result.affected > 0;
  }

  async findByDonorId(donorId: string): Promise<Donation[]> {
    return await this.donationRepository.find({
      where: { donor: { id: donorId } },
    });
  }
}
