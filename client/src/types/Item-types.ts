export type TUser = {
  id: string;
  name: string;
  isAuthenticated: boolean;
};

export type TRegisterForm = Omit<TUser, 'isAuthenticated' | 'id'> & {
  email: string;
  password: string;
  confirmPassword: string;
  formError: string | null;
};

export type TLoginForm = {
  email: string;
  password: string;
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

export type TBoardMemberInfos = {
  name: string;
  role: string;
  imageUrl: string[];
  pictures?: string[];
  playerSeasons: string[];
  trajectory: string;
  anecdote?: string;
  otherComment?: string;
};
