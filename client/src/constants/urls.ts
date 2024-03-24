export const urls = {
  // Users
  register: '/api/v1/users/register',
  emailVerify: '/api/v1/users/verify-email',
  requestPasswordReset: '/api/v1/users/forgot-password',
  updatePassword: '/api/v1/users/update-password',
  logIn: '/api/v1/users/login',
  logOut: '/api/v1/users/logout',
  getMe: '/api/v1/users/me',
  getDataMe: '/api/v1/users/me/data',
  patchMe: '/api/v1/users/me',
  // Chapters
  createChapter: '/api/v1/chapters',
  getAllChapters: '/api/v1/chapters',
  getChapterById: '/api/v1/chapters/id/:chapterId',
  getChapterBySeason: '/api/v1/chapters/season',
  getMyChapters: '/api/v1/chapters/me',
  patchChapter: '/api/v1/chapters',
  // Others
  getPdfBook:
    '/public/documents/Llibre-veterans-hoquei-patins-fcb_compressed.pdf',
  sendContactEmail: `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_KEY}`,
};
