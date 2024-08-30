import { CreateDonorDto } from 'src/donors/dto/create-donor.dto';
import { Donor } from 'src/donors/entities/donor.entity';

export interface IDonorRepository {
  findAll(): Promise<Donor[]>;
  findById(id: string): Promise<Donor>;
  save(donor: CreateDonorDto): Promise<Donor>;
  delete(id: string): Promise<boolean>;
}
