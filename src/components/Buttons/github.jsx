import { FiGithub } from "react-icons/fi"; // Importing GitHub icon

const Git = () => {
  return (
    <RoundedSlideButton />
  );
};

export const Github = ({link}) => {
  return (
    <a href={link} className="no-underline">
    <button
      className={`
        relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px]
        border-teal-300 bg-teal-600 px-4 py-2 font-semibold
        uppercase text-white transition-all duration-500
        
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-purple-500
        before:transition-transform before:duration-1000
        before:content-[""]

        hover:scale-105 hover:text-white hover:border-purple-500
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95`}
    >
      <FiGithub className="text-lg"/> {/* Using the GitHub icon */}
      <span>GitHub</span>
    </button>
    </a>
  );
};

export default Git;
