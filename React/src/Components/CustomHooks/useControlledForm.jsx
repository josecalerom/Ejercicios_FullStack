import { useState } from "react";

export default function useControlledForm(initialValue = "") {
  const [input, setInput] = useState(initialValue);
  const [password, setPassword] = useState(initialValue)

  const handleInputChange = (e) => setInput(e.target.value);
  const handlePasswordChage = (e) => setPassword(e.target.value);

  return {
    input,
    password,
    onInputChange: handleInputChange,
    onPassChange: handlePasswordChage
  };
}