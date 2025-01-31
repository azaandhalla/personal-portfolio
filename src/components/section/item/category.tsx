import ItemBadges from "./badges";

interface SkillCategoryProps {
  category?: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = (props) => {
  return (
    <div className="grid grid-cols-5 text-sm items-center">
      {props.category && <div className="text-slate-500">{props.category}</div>}
      <div className="col-span-4 row-span-2 flex gap-2 flex-wrap">
        <ItemBadges values={props.skills} />
      </div>
    </div>
  );
};
export default SkillCategory;
