import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div className='mt-20 font-bold text-2xl text-center text-primary'>
        <h1>Aquí no tenim res per mostrar❗</h1>
        <Link to='/' className='hover:underline underline-offset-4 decoration-4'>
          Torna a l'inici
        </Link>
      </div>
    </>
  );
};

export default NotFound;
