import { Donation } from 'src/donations/entities/donation.entity';

export interface IDonationRepository {
  findAll(): Promise<Donation[]>;
  findById(id: string): Promise<Donation>;
  save(donation: Donation): Promise<Donation>;
  delete(id: string): Promise<boolean>;
  findByDonorId(donorId: string): Promise<Donation[]>;
}
