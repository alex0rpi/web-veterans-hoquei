export const paths = {
  home: '/',
  genericSeason: '/temporades/2017-2018',
  season: '/temporades/:currentSeason',
  book: '/llibre-veterans-hoquei-patins-fcb',
  blog: '/blog',
  players: '/jugadors',
  // auth paths
  register: '/auth/register',
  login: '/auth/login',
  verify: '/auth/verify',
  requestPasswordReset: '/auth/request-password-reset',
  updatePassword: '/auth/reset-password',
  // admin paths
  me: '/admin/me',
  meData: '/admin/me/data',
  newChapter: '/admin/new-chapter',
  userChapterList: '/admin/user-chapter-list',
  editChapter: '/admin/edit-chapter/:currentSeason',
};
