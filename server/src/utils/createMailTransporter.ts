import nodemailer from 'nodemailer';

export const createMailTransporter = () => {
  const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user:
        process.env.EMAIL_ADDRESS || 'association_email@association_email.com',
      pass: process.env.EMAIL_PASS || 'associationMailPassword',
    },
  });

  return transporter;
};
