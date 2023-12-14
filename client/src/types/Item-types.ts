export interface User {
  id: string | undefined;
  name: string | undefined;
}

export type ChapterListItem = {
  id: string;
  season: string;
  titlePro: string;
  titleBases: string;
};

export interface blogPost {
  id: string | undefined;
  author: string | undefined;
  title: string | undefined;
  content: string | undefined;
}

export interface Theme {
  darkTheme: boolean;
}
