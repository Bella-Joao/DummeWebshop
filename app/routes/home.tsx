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

      <div className="p-6">
        <div className="max-w-6xl mx-auto px-2 mt-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center">
          {products.map((product) => (
        <div
          key={product.id}
          className="bg-[#493545] p-4 rounded-xl shadow h-64 w-[200px] text-white"
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-24 object-cover rounded mb-2"
          />
          <h2 className="text-sm font-bold truncate">{product.title}</h2>
          <p className="text-xs">€{product.price}</p>
          <button className="mt-2 bg-black px-3 py-1 text-sm rounded">Add to cart</button>
        </div>
        ))}
        </div>
      </div>

  </div>
  </div>
  );
}
