import { useEffect, useState, useContext } from "react";
import { LanguageContext } from "../LanguageContext/LanguageContext"

export function Clock() {

  const language = useContext(LanguageContext);

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  return <h2 className="clock">{language === "en" ? "Current time:" : "Son las:"} {date.toLocaleTimeString()}</h2>;
}
