import { useLocation } from 'react-router-dom';
import { NavItem } from './index.ts';
import { paths } from '../../constants/index.ts';
import {
  faBookOpen,
  faPeopleGroup,
  faLink,
  faLocationDot,
  faEnvelope,
  faCalendar,
  faStreetView,
  faPeopleRoof,
} from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from 'framer-motion';

const MainNavList = () => {
  const location = useLocation();
  const isHome = location.pathname === paths.home;
  const isSeason = location.pathname.startsWith(paths.season.split(':')[0]);

  return (
    <AnimatePresence>
      <motion.div
        key={isHome ? 'home' : 'season'}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.3 }}
      >
        {isHome && (
          <>
            <NavItem icon={faPeopleRoof} title='Qui som' id='association' />
            <NavItem icon={faStreetView} title='Salutació president' id='presidentGreeting' />
            <NavItem icon={faPeopleGroup} title='Junta' id='boardMembers' />
            <NavItem
              icon={faBookOpen}
              title='El Llibre'
              // to={paths.book}
              id='bookSection'
            />
            <NavItem icon={faCalendar} title='Temporades' id='seasonsSection' />
            <NavItem icon={faLink} title='Enllaços' id='linksSection' />
            <NavItem icon={faLocationDot} title='On som' id='locationSection' />
            <NavItem icon={faEnvelope} title='Contacte' id='contactSection' />
          </>
        )}
        {isSeason && (
          <>
            <NavItem icon={faPeopleGroup} title='Professional' id='proArticle' />
            <NavItem icon={faPeopleGroup} title='Bases' id='basesArticle' />
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default MainNavList;
