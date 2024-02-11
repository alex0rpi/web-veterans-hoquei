export const valMessages = {
  name: {
    min: "Almenys dos caràcters alfanumèrics",
    max: "Massa llarg",
    required: "Un nom és requerit",
  },
  email: {
    notValidEmail: "L'email no és vàlid",
    max: "Email massa llarg",
    required: "Email requerit",
  },
  password: {
    weak: "Contrasenya massa feble, ha de contenir almenys 8 caràcters, una majúscula, una minúscula i un número",
    required: "Contrasenya és requerida",
    short:
      "Massa curta, ha de contenir almenys 8 caràcters i cap espai en blanc",
  },
  confirmPassword: {
    match: "Contrasenyes no coincideixen",
    required: "Sisplau confirma la contrasenya",
  },
  noWhiteSpace: "No pot contenir espais en blanc",
  season: {
    required: "Camp requerit",
    titleMin: "El títol és massa curt",
    titleMax: "El títol és massa llarg",
    contentMax: "El text és massa llarg",
    contentMin: "El text és massa curt",
  },
  image: {
    size: "La imatge és massa gran, 5MB màxim",
    format: "Format de la imatge no vàlid",
  },
};
