import { TRequestPasswordReset } from '../schemas/userRoutesSchema';
import { createMailTransporter } from './createMailTransporter';

type TSendPasswordResetEmail = TRequestPasswordReset & { resetToken: string } & {
  name: string;
};

export const sendPasswordResetEmail = ({
  name,
  email,
  resetToken,
}: TSendPasswordResetEmail) => {
  const transporter = createMailTransporter();

  const mailOptions = {
    from: `"no-reply Veterans Hoquei Patins FCB" <${process.env.EMAIL_ADDRESS}>`,
    to: email,
    subjecy: 'Crea un nou password pel teu compte...',
    html: `<div style="font-family: sans-serif; font-size: 1.2em;">
    <p>Hola 🌤️👋🏻 ${name}, <br>
    Si has rebut aquest correu electrònic, significa que has sol·licitat una nova contrasenya per autentificar-te a la nostra aplicació. <br>
    Per a completar el procés, clica en el següent link:</p>
    ➡️ <a href='${process.env.CLIENT_URL}/admin/reset-password?resetToken=${resetToken}'>CONFIRMEM EL TEU CORREU 📧</a> <br>

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
      console.log('Email de modificació de contrasenya enviat!');
    }
  });
};
