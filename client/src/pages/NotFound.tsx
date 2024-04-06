import { Link } from 'react-router-dom';
import { easeInOut, motion } from 'framer-motion';
import { Navigation } from '../components/Navigation/Navigation';
import { useRef } from 'react';

const NotFound = () => {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const associationRef = useRef<HTMLDivElement | null>(null);
  const boardRef = useRef<HTMLDivElement | null>(null);
  const bookRef = useRef<HTMLDivElement | null>(null);
  const seasonsRef = useRef<HTMLDivElement | null>(null);
  const relatedLinksRef = useRef<HTMLDivElement | null>(null);
  const locationRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className='centerLayout'>
      <Navigation
        homeRef={homeRef}
        associationRef={associationRef}
        seasonsRef={seasonsRef}
        boardRef={boardRef}
        bookRef={bookRef}
        relatedLinksRef={relatedLinksRef}
        locationRef={locationRef}
        contactRef={contactRef}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: easeInOut, duration: 1 }}
        exit={{ opacity: 0 }}
        className='pageLayout'
      >
        <div className='mt-20 font-bold text-2xl text-center text-primary'>
          <h1>Aquí no tenim res per mostrar❗</h1>
          <Link
            to='/'
            className='hover:underline underline-offset-4 decoration-4'
          >
            Torna a l'inici
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
