import Navbar from "../components/navbar"; // pas het pad aan als nodig

export default function Home() {
  return (
    <div className="min-h-screen bg-red-100">
      <Navbar />

      <div className="p-6">
        <div className="max-w-6xl mx-auto px-2 mt-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center">
          {Array.from({ length: 15 }).map((_, index) => (
            <div
              key={index}
              className="bg-[#493545] p-4 rounded-xl shadow h-64 w-[200px]"
            ></div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
