
import Image from "next/image";
const products = [
  {
    id: 1,
    name: "Hoodies & Sweetshirt",
    title: "Explore Now!",
    imageUrl:"/images/Rectangle20.png",
    exploreArrow: "/images/Arrow 1.png"
  },
  {
    id: 2,
  name: "Coats & Parkas",
    title: "Explore Now!",
    imageUrl: "/images/Rectang21.png",
     exploreArrow: "/images/Arrow 1.png"
  },
  {
    id: 3,
    name: "Tees & T-Shirt",
    title: "Explore Now!",
    imageUrl: "/images/Rectangle22.png",
     exploreArrow: "/images/Arrow 1.png"
  },
  
];




export default function NewArrivals() {
  return (
    <div className=" mx-auto   py-4 md:py-8 md:px-8 ">
      <h1 className="text-4xl font-bold text-center mb-8 ">New Arrivals</h1>
      <div className=" justify-between place-content-center grid grid-cols-1  md:grid-cols-3 mx-auto w-[90%] h-auto">
        {products.map((product) => (
          <div
            key={product.id}
           
          >
            <Image
              src={product.imageUrl}
              alt={product.name}
              className="w-[80%] h-auto object-cover mx-12 rounded-md flex place-content-center "
             
            />
            <div className="inline-flex ml-12  items-center" >
            <h3 className="text-xl font-medium mt-4 pe-32 ">{product.name}</h3>
            <Image
              src={product.exploreArrow}
              alt={product.name}mx-12 rounded-md 
               className="w-[29-px] h-5 mt-6"
                
            />
             
            </div>
            <p className="text-[#7F7F7F] ml-12 my-2 hover:text-blue-400 ">{product.title}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
}