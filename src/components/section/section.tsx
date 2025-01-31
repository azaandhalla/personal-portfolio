import { PropsWithChildren } from "react";

interface SectionProps {
  title: string;
}

const Section: React.FC<PropsWithChildren<SectionProps>> = (props) => {
  return (
    <div className="mt-8 mx-36">
      <div className="grid grid-cols-4 text-slate-700">
        <div className="font-bold text-2xl col-span-1">{props.title}</div>
        <div className="flex flex-col gap-6 col-span-3">{props.children}</div>
      </div>
      <div className="border-b py-4" />
    </div>
  );
};
export default Section;
