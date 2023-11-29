export interface User {
  id: string | undefined;
  name: string | undefined;
}

export interface Chapter {
  id: string | undefined;
  season: string | undefined;
  titlePro: string | undefined;
  titleBases: string | undefined;
  contentPro: string | undefined;
  contentBases: string | undefined;
}

export interface blogPost {
  id: string | undefined;
  author: string | undefined;
  title: string | undefined;
  content: string | undefined;
}

export interface Theme {
  darkTheme: boolean;
}
