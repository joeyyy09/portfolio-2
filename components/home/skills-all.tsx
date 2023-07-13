import Skillsall from "../../shared/utils/skillsall";
import { Skill } from "../../shared/utils/types";

export default function SkillsIcons(): JSX.Element {
  return (
    <div className="flex items-center justify-center lg:mt-16 flex-wrap w-5/6 md:w-full xl:w-5/6">
      {Skillsall.map(({ src, name }: Skill) => {
        return (
          <img
            src={src}
            alt={name}
            key={src}
            className="p-2 tranform transition duration-500 hover:scale-125 sm:p-6 h-16 sm:h-24"
          />
        );
      })}
    </div>
  );
}
