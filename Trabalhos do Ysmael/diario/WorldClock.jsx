import { useState, useEffect } from "react";

function WorldClock({ city, timezone }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options = {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      setTime(now.toLocaleTimeString("pt-BR", options));
    };

    updateClock(); // Atualiza na montagem
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="clock-card">
      <h2>{city}</h2>
      <p>{time}</p>
    </div>
  );
}

export default WorldClock;
