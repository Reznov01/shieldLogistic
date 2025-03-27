import { TbShieldStar } from "react-icons/tb";
export default function CardServices({
  title,
  subTitle,
  item1,
  item2,
  item3,
  item4,
  item5,
  icon,
  img,
}) {
  return (
    <div className="card bg-base-100 w-[600px] h-[450px] ">
      <div className="card-head">
        <img
          src={img}
          alt="imagen ilustrativa de servicios"
          className="w-full h-[300px] object-cover rounded-t-2xl"
        />
      </div>
      <div className="card-body bg-gray-700 text-white rounded-b-lg hover:bg-gray-800 transition-colors ">
        <div className="p-6">
          <p className="text-4xl bg-gray-400 w-fit p-3 rounded-md text-black mt-3">
            {icon}
          </p>
          <h2 className="card-title text-2xl sm:text-4xl font-serif my-2">
            {title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-300">{subTitle}</p>
        </div>
        <div className="flex flex-col p-6 gap-5">
          <div className="flex">
            <p className="text-3xl pr-3">
              <TbShieldStar />
            </p>
            <p className="text-xl">{item1}</p>
          </div>
          <div className="flex">
            <p className="text-3xl pr-3">
              <TbShieldStar />
            </p>
            <p className="text-xl">{item2}</p>
          </div>
          <div className="flex">
            <p className="text-3xl pr-3">
              <TbShieldStar />
            </p>
            <p className="text-xl">{item3}</p>
          </div>
          <div className="flex">
            <p className="text-3xl pr-3">
              <TbShieldStar />
            </p>
            <p className="text-xl">{item4}</p>
          </div>
        </div>
        <div className="card-actions w-full p-3">
          <button
            className="bg-blue-500  w-full rounded-md text-xl cursor-pointer transition-all text-white px-6 py-2 
        border-blue-600 border-b-[6px] hover:brightness-150 hover:-translate-y-[1px] hover:border-b-[6px]
          active:brightness-90 active:translate-y-[2px]"
          >
            Solicitar informacion
          </button>
        </div>
      </div>
    </div>
  );
}
