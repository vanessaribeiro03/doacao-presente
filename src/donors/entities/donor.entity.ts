import { Donation } from 'src/donations/entities/donation.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('donors')
export class Donor {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public fullName: string;

  @Column()
  public age: number;

  @Column()
  public bloodType: string;

  @Column({ nullable: true })
  public adress: string;

  @Column()
  public phoneNumber: string;

  @Column()
  public email: string;

  @OneToMany(() => Donation, donations => donations.donor, {
    nullable: true,
    cascade: true,
  })
  public donations?: Donation[];

  constructor(
    fullName: string,
    age: number,
    bloodType: string,
    adress: string,
    phoneNumber: string,
    email: string,
  ) {
    this.fullName = fullName;
    this.age = age;
    this.bloodType = bloodType;
    this.adress = adress;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
}
