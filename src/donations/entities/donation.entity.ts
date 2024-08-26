import { Donor } from 'src/donors/entities/donor.entity';
import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Donation {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @CreateDateColumn({ type: 'timestamp' })
  public date: Date;

  @ManyToOne(() => Donor, donor => donor.donations)
  public donor: Donor;
}
