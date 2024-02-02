export type TUser = {
  id: string;
  name: string;
  isVerified: boolean;
};

export type RegisterForm = Omit<TUser, 'isVerified' | 'id'> & {
  email: string;
  password: string;
  confirmPassword: string;
  formError: string | null;
};

export type TChapterListItem = {
  id: string;
  season: string;
  titlePro: string;
  titleBases: string;
};

export interface Theme {
  darkTheme: boolean;
}

export type TChapter = {
  id: string;
  season: string;
  titlePro: string;
  contentPro: string;
  titleBases: string;
  contentBases: string;
};
