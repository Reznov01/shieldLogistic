export default function CardUniforme({ image, title, description }) {
  return (
    <div className="max-w-sm w-full bg-gray-100 rounded-lg shadow-lg overflow-hidden">
      <div className="w-full h-[350px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain object-center"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold sm:font-normal mb-2 ">{title}</h3>
        <div className="w-full h-full">
          <p className="text-gray-900 font-medium text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
}
