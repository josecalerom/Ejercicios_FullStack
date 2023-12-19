import { AlertClock } from "./Components/AlertClock/AlertClock";
import { FocusableInput } from "./Components/FocusableInput/FocusableInput";
import { Hello } from "./Components/Hello/Hello";
import { Counter } from "./Components/Counter/Counter"
import { Login } from "./Components/Login/Login";
import { UncontrolledLogin } from "./Components/UncontrolledLogin/UncontrolledLogin";
import { StrictmodeFocusableInput } from "./Components/StrictmodeFocusableInput/StrictmodeFocusableInput";
import { Color } from "./Components/Color/Color"
import { Colors } from "./Components/Colors/Colors"

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
      <h3>This is the Color component</h3>
      <Color color={{name: "José", id: 3456}}/>
      <h3>This is the Colors component</h3>
      <Colors colors={[
        {name: "Julio", id: 1234},
        {name: "Mario", id: 5678},
        {name: "Ana", id: 91011},
        {name: "Gabriela", id: 121314},
        {name: "Camilo", id: 151617},
        {name: "Eduardo", id: 181920},
        {name: "Maite", id: 212223},
      ]}/>
    </div>
  );
}