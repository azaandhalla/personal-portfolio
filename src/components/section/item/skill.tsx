import { PropsWithChildren } from "react";

interface SkillItemProps {
  title: string;
}

const SkillItem: React.FC<PropsWithChildren<SkillItemProps>> = (props) => {
  return (
    <div className="flex flex-col gap-2 mb-3">
      {props.title && (
        <div className="text-slate-700 text-lg font-bold">{props.title}</div>
      )}
      <div className="flex flex-col gap-2 col-span-3">{props.children}</div>
    </div>
  );
};
export default SkillItem;
