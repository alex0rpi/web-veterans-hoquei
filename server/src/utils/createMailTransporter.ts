import nodemailer from 'nodemailer';

export const createMailTransporter = () => {
  const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: 'orpi.alex@hotmail.com',
      pass: process.env.EMAIL_PASS,
    },
  });

  return transporter;
};
