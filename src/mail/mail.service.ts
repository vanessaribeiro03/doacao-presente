import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { messageMail } from './utils/mail.message';

@Injectable()
export class MailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  async sendMail(to: string, subject: string) {
    const mailOptions = {
      from: 'Doação Presente <equipedoacaopresente@gmail.com>',
      to,
      subject,
      text: '',
      html: messageMail,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('email enviado: ' + info.response);
    } catch (error) {
      console.error('Error sending email: ', error);
    }
  }
}
