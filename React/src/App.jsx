import { AlertClock } from "./Components/AlertClock/AlertClock";
import { FocusableInput } from "./Components/FocusableInput/FocusableInput";
import { Hello } from "./Components/Hello/Hello";
import { Login } from "./Components/Login/Login";
import { UncontrolledLogin } from "./Components/UncontrolledLogin/UncontrolledLogin";
import { StrictmodeFocusableInput } from "./Components/StrictmodeFocusableInput/StrictmodeFocusableInput";

export function App() {

  function printStateValue(state) {
    console.log(state);
  }

  function handleShowTime() {
    const now = new Date();
    alert(`Current time: ${now.toLocaleTimeString()}`);
  }

  return (
    <div>
      <Hello />
      <h3>FocusableInput component ⬇️</h3>
      <FocusableInput />
      <h3>StrictmodeFocusableInput component ⬇️</h3>
      <StrictmodeFocusableInput />
    </div>
  );
}