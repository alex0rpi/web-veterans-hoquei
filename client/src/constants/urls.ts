const URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';

export const urls = {
  // Users
  register: `${URL}/api/v1/users/register`,
  emailVerify: `${URL}/api/v1/users/verify-email`,
  requestPasswordReset: `${URL}/api/v1/users/forgot-password`,
  updatePassword: `${URL}/api/v1/users/update-password`,
  logIn: `${URL}/api/v1/users/login`,
  logOut: `${URL}/api/v1/users/logout`,
  getMe: `${URL}/api/v1/users/me`,
  getDataMe: `${URL}/api/v1/users/me/data`,
  patchMe: `${URL}/api/v1/users/me`,
  // Chapters
  createChapter: `${URL}/api/v1/chapters`,
  getAllChapters: `${URL}/api/v1/chapters`,
  getChapterById: `${URL}/api/v1/chapters/id/:chapterId`,
  getChapterBySeason: `${URL}/api/v1/chapters/season`,
  getMyChapters: `${URL}/api/v1/chapters/me`,
  patchChapter: `${URL}/api/v1/chapters`,
  // Others
  getPdfBook: `${URL}/public/documents/Llibre-veterans-hoquei-patins-fcb_compressed.pdf`,
  sendContactEmail: `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_KEY}`,
};
