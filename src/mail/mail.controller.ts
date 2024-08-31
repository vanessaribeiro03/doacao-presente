import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateMailDto } from './dto/create-mail.dto';

@ApiTags('Email')
@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('send-email')
  async sendEmail(@Body() mailDto: CreateMailDto) {
    const { to, subject } = mailDto;
    await this.mailService.sendMail(to, subject);
    return { message: 'Email sent successfully!' };
  }
}
