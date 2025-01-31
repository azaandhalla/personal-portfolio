import Image from "next/image";

interface ItemTitleProps {
  primary: string;
  title?: string;
  subTitle?: string;
  date: string;
}

const ItemTitle: React.FC<ItemTitleProps> = (props) => {
  return (
    <div className="flex gap-5 justify-between">
      <div className="flex gap-1 text-xl items-center">
        <div className="font-bold">{props.primary}</div>
        {props.title && (
          <>
            <div>—</div>
            <div className="font-medium ">{props.title}</div>
          </>
        )}
        {props.subTitle && (
          <div className="font-extralight">{props.subTitle}</div>
        )}
      </div>
      <div className="flex gap-1 items-center w-fit">
        <Image src="calender.svg" alt="calender logo" width={20} height={20} />
        <div className="text-sm">{props.date}</div>
      </div>
    </div>
  );
};

export default ItemTitle;
