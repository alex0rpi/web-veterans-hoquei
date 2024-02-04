import { TUserForVerification, TVerifyUser } from '../schemas/userRoutesSchema';
import { createMailTransporter } from './createMailTransporter';

export const sendVerificationEmail = (user: TUserForVerification) => {
  const transporter = createMailTransporter();

  const mailOptions = {
    from: `"no-reply Veterans Hoquei Patins FCB" <${process.env.EMAIL_ADDRESS}>`,
    to: user.email,
    subjecy: 'Verifica el teu correu electrònic...',
    html: `<div style="font-family: sans-serif; font-size: 1.2em;">
    <p>Bon dia 🌤️👋🏻 ${user.name}, <br>
    Si has rebut aquest correu electrònic, significa que t'has registrat correctament a la nostra aplicació. <br>
    Per a completar el procés de registre, confirma el teu email fent clic en 
    <a style="font-weight: strong; color: blue" href='${process.env.CLIENT_URL}/admin/verify?emailToken=${user.emailToken}'>aquest</a> enllaç:</p>

    <p><span style="color:red">Aquest link caducarà d'aquí 24 hores.</span> Passat aquest temps el teu compte serà esborrat i t'hauràs de tornat a registrar.</p>
    <p>Si no has estat tu, ignora aquest correu electrònic.</p>
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
