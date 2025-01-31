interface ItemBulletProps {
  value: string;
}

const ItemBullet: React.FC<ItemBulletProps> = (props) => {
  return (
    <div className="gap-2.5 flex">
      <div className="py-[2.5px] flex">
        <div className="w-2 h-2 bg-slate-300 rounded-[2px]" />
      </div>
      <div className="text-slate-700 leading-none">{props.value}</div>
    </div>
  );
};
export default ItemBullet;
