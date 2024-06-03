import { TUserForVerification, TVerifyUser } from '../schemas/userRoutesSchema';
import { createMailTransporter } from './createMailTransporter';

export const sendVerificationEmail = ({ name, email, emailToken }: TUserForVerification) => {
  const transporter = createMailTransporter();
  const senderEmail = process.env.EMAIL_ADDRESS || '';

  const mailOptions = {
    from: `"no-reply Veterans Hoquei Patins FCB" <${senderEmail}>`,
    to: email,
    subject: 'Verifica el teu correu electrònic...',
    html: `<div style="font-family: sans-serif; font-size: 1.2em;">
    <p>Bon dia 🌤️👋🏻 ${name}, <br>
    Si has rebut aquest correu electrònic, significa que t'has registrat correctament a la nostra aplicació. <br>
    Per a completar el procés de registre, confirma el teu email fent clic en 
    <a href='${process.env.CLIENT_URL}/auth/verify?emailToken=${emailToken}' target="_blank">aquest</a> enllaç:</p>
    ➡️ <a href='${process.env.CLIENT_URL}/auth/verify?emailToken=${emailToken}'>CONFIRMA REGISTRE 📧</a>
    <p><span style="color:red">Aquest link caducarà d'aquí 24 hores.</span> Passat aquest temps el teu compte serà esborrat i t'hauràs de tornat a registrar.</p>
    <p>Si no has estat tu, ignora aquest correu electrònic.</p>
    <hr>
    <p>Sisplau no contestis a aquest correu electrònic.</p>
    <p>Gràcies,</p>
    <p>🟥🟦 El teu equip de Veterans Hoquei Patins FCB 🟦🟥</p>
    </div>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('error enviant email: ', error);
    } else {
      console.log('Email de verificació enviat!');
    }
  });
};
