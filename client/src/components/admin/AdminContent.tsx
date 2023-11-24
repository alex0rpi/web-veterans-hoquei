import AdminLogin from './auth/AdminLogin';
import AdminRegister from './auth/AdminRegister';

export const AdminContent = () => {
  return (
    <div className="md:col-start-3 md:col-end-4 md:justify-stretch px-6 py-6 bg-gray-200 ">
      {/* <Button title="Accés membres" /> */}
      <AdminLogin />
      <AdminRegister />
      {/* <AdminPosts/> */}
      {/* <AdminChapters/> */}
      {/* <NewChapterForm/> */}
      {/* <NewPostForm/> */}
    </div>
  );
};
