import Image from "next/image";
import Badge from "./badges";

const Header: React.FC = () => {
  return (
    <div className="border-b-[1px] border-slate-300">
      <Image
        className="absolute -z-10 w-full"
        src="/background.svg"
        alt="headerBG"
        width={1440}
        height={388}
      />
      <div className="flex justify-center items-center pt-10 pb-4">
        <div className="flex gap-5 flex-col items-center">
          <div className="flex flex-col items-center gap-1">
            <div className="text-5xl font-extrabold text-slate-700">
              Azaan Dhalla
            </div>
            <div className="text-2xl font-medium text-slate-600">
              Dev-Ops Engineer
            </div>
          </div>
          <div className="flex gap-1 flex-col items-center">
            <div className="flex items-center gap-[2px] text-slate-600">
              <Image
                src="/location.svg"
                alt="location"
                width={15}
                height={15}
              />
              Austin, TX
            </div>
            <div className="flex gap-2">
              <Badge
                title="in/azaandhalla"
                url="https://www.linkedin.com/in/azaandhalla/"
                logo="linkedin.svg"
              />
              <Badge
                title="/azaandhalla"
                url="https://github.com/azaandhalla"
                logo="github.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
