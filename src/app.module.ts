import { Module } from '@nestjs/common';
import { DonorsModule } from './donors/donors.module';
import { DonationsModule } from './donations/donations.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Donor } from './donors/entities/donor.entity';
import { RepositoryModule } from './repository/repository.module';
import { Donation } from './donations/entities/donation.entity';
import { MailModule } from './mail/mail.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432'),
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      entities: [Donor, Donation],
      synchronize: true,
      logging: true,
    }),
    DonorsModule,
    DonationsModule,
    RepositoryModule,
    MailModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
