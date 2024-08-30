import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('send-email')
  async sendEmail(@Body() body) {
    const { to, subject } = body;
    await this.mailService.sendMail(to, subject);
    return { message: 'Email sent successfully!' };
  }
}
