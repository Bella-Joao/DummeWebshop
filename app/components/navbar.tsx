export default function Navbar() {
  return (

    <nav className="w-full bg-[#493545] shadow p-4">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Links: Titel */}
        <div className="text-xl font-bold">The DummyShop</div>

        {/* Midden: Zoekbalk */}
        <div className="flex-1 mx-4 max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring focus:ring-gray-300"
          />
        </div>

        {/* Rechts: Login */}
        <div>
          <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
