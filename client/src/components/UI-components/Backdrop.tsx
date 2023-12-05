import { motion } from 'framer-motion';

type TBackdropProps = {
  onClick: () => void;
};

export const Backdrop = (props: TBackdropProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="fixed left-0 top-0 h-full w-full bg-slate-950/80"
        onClick={props.onClick}
      />
    </motion.div>
  );
};
