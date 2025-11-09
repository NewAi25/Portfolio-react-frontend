import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Click below to fetch from backend");

  const fetchMessage = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/message");
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error(error);
      setMessage("⚠️ Unable to connect to backend");
    }
  };

  return (
    <div className="container">
      <h1>🚀 My Full Stack App</h1>
      <p>{message}</p>
      <button onClick={fetchMessage}>Load Message</button>
    </div>
  );
}

export default App;
