import { RxFontSize } from 'react-icons/rx';

type Props = {
  onFontSizeChange: (value: string) => void;
};

const FontSizeController = ({ onFontSizeChange }: Props) => {
  return (
    <div className='flex flex-row items-center justify-center border border-gray-400 rounded-full px-3'>
      <button
        type='button'
        className='font-bold text-4xl md:text-3xl md:hover:scale-125 active:text-gray-500'
        onClick={() => onFontSizeChange('-')}
      >
        -
      </button>
      <RxFontSize
        className='mx-2 text-3xl md:text-2xl md:hover:scale-125 active:text-gray-500 cursor-pointer'
        onClick={() => onFontSizeChange('=')}
      />
      <button
        type='button'
        className='font-bold text-4xl md:text-3xl md:hover:scale-125 active:text-gray-500'
        onClick={() => onFontSizeChange('+')}
      >
        +
      </button>
    </div>
  );
};

export default FontSizeController;
