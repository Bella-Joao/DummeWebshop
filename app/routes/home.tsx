import Navbar from "../components/navbar"; 
import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};


export default function Home() {

  const [products, setProducts] = useState<Product[]>([]);

   useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);


  return (
    <div className="min-h-screen bg-red-100">
      <Navbar />

      <div className="p-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center">
          {products.map((product) => (
        <div
          key={product.id}
          className="bg-[#493545] p-4 rounded-xl shadow h-64 w-[250px] h-[320px] text-white mt-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl border-2 border-black"
        >
        <div>  
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-24 object-cover rounded mb-2 bg-white h-50 border-3 border-black"
          />
          <h2 className="text-sm font-bold truncate text-center">{product.title}</h2>
          </div>
          <p className="text-xs text-center">€{product.price}</p>
          
          <button className="mt-4 bg-black px-6 py-1 text-sm rounded mx-auto block ">Add to cart</button>
        </div>
        ))}
        </div>
      </div>

  </div>
  );
}
