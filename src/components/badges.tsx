import Image from "next/image";
import Link from "next/link";

interface BadgeProps {
  title: string;
  url: string;
  logo: string;
}
const Badge: React.FC<BadgeProps> = (props) => {
  return (
    <Link href={props.url} rel="noopener noreferrer" target="_blank">
      <div className="h-7 px-2 bg-violet-50 rounded-3xl border border-violet-600 justify-center items-center gap-1 inline-flex">
        <Image src={props.logo} alt="linkedin logo" width={20} height={20} />
        <div className="text-violet-600 text-[12px] font-semibold">
          {props.title}
        </div>
      </div>
    </Link>
  );
};
export default Badge;
