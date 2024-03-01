import { motion } from 'framer-motion';

type TBackdropProps = {
  onClick: () => void;
};

const Backdrop = (props: TBackdropProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className='z-20 fixed left-0 top-15 md:top-0 h-full w-full bg-slate-950/80'
        onClick={props.onClick}
      />
    </motion.div>
  );
};

export default Backdrop;
