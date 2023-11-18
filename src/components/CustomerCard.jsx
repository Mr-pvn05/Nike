import { star } from "../assets/icons";

const CustomerCard = ({ imgUrl, name, feedBack, rating }) => {
  return (
    <div className="flex flex-1 flex-col items-center gap-4 text-center max-w-lg">
      <img className="rounded-full" src={imgUrl} alt="Customer img" width={100} height={100}/>
      <p className="font-palanquin text-slate-gray m-auto info-text">{feedBack}</p>
      <div className="flex gap-2">
        <img src={star} alt="Review" width={24} height={24} className="object-conatin m-0"/>
        <h3 className="font-palanquin text-slate-gray info-text">{rating}</h3>
      </div>
      <p className="font-bold font-montserrat text-3xl">{name}</p>
    </div>
  );
};

export default CustomerCard;
