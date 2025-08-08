import { useState } from "react";
import { useNavigate } from "react-router";
import { users } from "../persLib/users";



export default function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/"); 
    } else {
      setError("Ongeldige inloggegevens.");
    }
  }


  return (
    <div className="min-h-screen flex items-center justify-center text-white bg-red-100">
      <div className=" p-8 rounded-lg shadow-md w-full max-w-sm bg-[#493545]">
        <h1 className="text-2xl font-bold mb-6 text-center ">Inloggen</h1>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm mb-1">E-mailadres</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded focus:outline-none bg-red-100 text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm mb-1">Wachtwoord</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 rounded  focus:outline-none bg-red-100 text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-2 rounded"
          >
            Inloggen
          </button>
        </form>
      </div>
    </div>
  );
}
