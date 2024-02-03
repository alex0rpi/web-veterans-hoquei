export const valMessages = {
  name: {
    min: 'Almenys dos caràcters alfanumèrics',
    max: 'Massa llarg',
    required: 'Un nom és requerit',
  },
  email: {
    notValidEmail: "L'email no és vàlid",
    max: 'Email massa llarg',
    required: 'Email requerit',
  },
  password: {
    weak: 'Contrasenya massa feble, ha de contenir almenys 8 caràcters, una majúscula, una minúscula i un número',
    required: 'Contrasenya és requerida',
    short: 'Massa curta, ha de contenir almenys 8 caràcters i cap espai en blanc',
  },
  confirmPassword: {
    match: 'Contrasenyes no coincideixen',
    required: 'Sisplau confirma la contrasenya',
  },
  noWhiteSpace: 'No pot contenir espais en blanc',
};
