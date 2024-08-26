import { Module } from '@nestjs/common';
import { DonationsService } from './donations.service';
import { DonationsController } from './donations.controller';
import { RepositoryModule } from 'src/repository/repository.module';

@Module({
  imports: [RepositoryModule],
  controllers: [DonationsController],
  providers: [DonationsService],
})
export class DonationsModule {}
