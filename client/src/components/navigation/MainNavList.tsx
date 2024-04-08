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
} from '@fortawesome/free-solid-svg-icons';

type TMainNav = {
  homeRef?: React.RefObject<HTMLDivElement>;
  associationRef?: React.RefObject<HTMLDivElement>;
  boardRef?: React.RefObject<HTMLDivElement>;
  seasonsRef?: React.RefObject<HTMLDivElement>;
  bookRef?: React.RefObject<HTMLDivElement>;
  relatedLinksRef?: React.RefObject<HTMLDivElement>;
  locationRef?: React.RefObject<HTMLDivElement>;
  contactRef?: React.RefObject<HTMLDivElement>;
};

const MainNavList = ({
  associationRef,
  seasonsRef,
  contactRef,
  locationRef,
  boardRef,
  relatedLinksRef,
  bookRef,
}: TMainNav) => {
  const location = useLocation();

  return (
    <>
      {location.pathname === paths.home && (
        <>
          <NavItem icon={faPeopleGroup} title='Qui som' scrollRef={associationRef} />
          <NavItem icon={faPeopleGroup} title='Junta' scrollRef={boardRef} />
          <NavItem
            icon={faBookOpen}
            title='El Llibre'
            // to={paths.book}
            scrollRef={bookRef}
          />
          <NavItem icon={faCalendar} title='Temporades' scrollRef={seasonsRef} />

          <NavItem icon={faLink} title='Enllaços' scrollRef={relatedLinksRef} />
          <NavItem icon={faLocationDot} title='On som' scrollRef={locationRef} />
          <NavItem icon={faEnvelope} title='Contacte' scrollRef={contactRef} />
        </>
      )}
    </>
  );
};

export default MainNavList;
