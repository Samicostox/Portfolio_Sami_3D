import { FiGlobe } from 'react-icons/fi';

const ButtonWrapper = () => {
  return (
  
      <RoundedSlideButton />

  );
};

export const RoundedSlideButton = ({link}) => {
  return (
    <a href={link} className="no-underline">
    <button
      className={`
        relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
        border-purple-400 px-4 py-2 font-semibold
        uppercase text-purple-400 transition-all duration-500
        
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-purple-400
        before:transition-transform before:duration-1000
        before:content-[""]

        hover:scale-105 hover:text-neutral-900
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95`}
    >
      <FiGlobe />
      <span>Live Link</span>
    </button>
    </a>
  );
};

export default ButtonWrapper;