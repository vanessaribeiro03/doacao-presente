import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDonorDto } from 'src/donors/dto/create-donor.dto';
import { Donor } from 'src/donors/entities/donor.entity';
import { IDonorRepository } from 'src/interfaces/donor.interface';
import { Repository } from 'typeorm';

@Injectable()
export class DonorRepository implements IDonorRepository {
  constructor(
    @InjectRepository(Donor)
    private readonly donorRepository: Repository<Donor>,
  ) {}

  async findAll(): Promise<Donor[]> {
    return await this.donorRepository.find();
  }

  async findById(id: string): Promise<Donor> {
    return await this.donorRepository.findOne({ where: { id } });
  }

  async save(donor: CreateDonorDto): Promise<Donor> {
    return await this.donorRepository.save(donor);
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.donorRepository.delete(id);
    return result.affected > 0;
  }
}
