import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateDonorDto } from './dto/create-donor.dto';
import { IDonorRepository } from 'src/interfaces/donor.interface';
import { Donor } from './entities/donor.entity';

@Injectable()
export class DonorsService {
  constructor(
    @Inject('IDonorRepository')
    private readonly donorRepository: IDonorRepository,
  ) {}

  async createDonor(donorDto: CreateDonorDto): Promise<Donor> {
    const { fullName, age, bloodType, adress, phoneNumber, email } = donorDto;

    const newDonor = new Donor(
      fullName,
      age,
      bloodType,
      adress,
      phoneNumber,
      email,
    );
    return await this.donorRepository.save(newDonor);
  }

  async findAll(): Promise<Donor[]> {
    return await this.donorRepository.findAll();
  }

  async findOne(id: string): Promise<Donor> {
    const donor = await this.donorRepository.findById(id);
    if (!donor) {
      throw new NotFoundException(`Donor with ID ${id} not found`);
    }
    return donor;
  }

  async updateDonor(id: string, donorDto: CreateDonorDto): Promise<Donor> {
    const donor = await this.findOne(id);
    if (!donor) {
      throw new NotFoundException(`Donor with ID ${id} not found`);
    }

    const updateDonor = { ...donor, ...donorDto, id };

    return await this.donorRepository.save(updateDonor);
  }

  async removeDonor(id: string): Promise<boolean> {
    const donor = await this.findOne(id);
    return await this.donorRepository.delete(donor.id);
  }
}
