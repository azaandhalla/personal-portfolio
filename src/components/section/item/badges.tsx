interface ItemBadgesProps {
  values: string[];
}

const ItemBadges: React.FC<ItemBadgesProps> = (props) => {
  return (
    <div className="flex gap-3 flex-wrap">
      {props.values.map((value, index) => (
        <div
          key={index}
          className="text-slate-500 text-xs shadow font-semibold p-1 bg-slate-100 rounded-sm justify-center items-center gap-4 inline-flex"
        >
          {value}
        </div>
      ))}
    </div>
  );
};
export default ItemBadges;
