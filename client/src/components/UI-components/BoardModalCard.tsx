import { easeIn, motion } from 'framer-motion';
import ReactDOM from 'react-dom';
import { TBoardMemberInfos } from '../../types/Item-types';
import BoardModalContent from './BoardModalContent';

type TModalProps = TBoardMemberInfos & {
  onModalClick: () => void;
};

const BoardModalCard = ({ ...props }: TModalProps) => {
  const modalScreen = (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: easeIn, duration: 0.2 }}
        className='fixed top-0 left-0 w-full h-screen z-20 bg-slate-950/50 cursor-pointer'
        onClick={props.onModalClick}
      ></motion.div>
      <BoardModalContent {...props} />
    </>
  );
  const modalElement = document.getElementById('modalbackdrop');
  if (!modalElement) return null; // or return some fallback component
  return ReactDOM.createPortal(modalScreen, modalElement);
};

export default BoardModalCard;
