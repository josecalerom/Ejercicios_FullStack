import { Welcome } from "./components/Welcome/Welcome.jsx";
import { Clock } from "./Components/Clock/Clock.jsx";
import { TodoList } from "./Components/TodoList/TodoList.jsx";
import { UncontrolledLogin } from "./Components/UncontrolledLogin/UncontrolledLogin.jsx";
import { FocusableInput } from "./Components/FocusableInput/FocusableInput.jsx";
import { Container } from "./Components/Container/Container.jsx";
import { LanguageContext } from "./Components/LanguageContext/LanguageContext";
import { useState } from "react";
import { GitHubUser } from "./Components/GitHubUser/GitHubUser.jsx";
import { GitHubUsers } from "./Components/GitHubUsers/GitHubUsers.jsx";

export function App() {
  const [language, setLanguage] = useState("en");

  function handleSetLanguage(language) {
    setLanguage(language);
  }

  function printStateValue(state) {
    console.log(state);
  }

  function handleShowTime() {
    const now = new Date();
    alert(`Current time: ${now.toLocaleTimeString()}`);
  }

  return (
    <>
    <Container title={<h1>This is the awesome title!</h1>}>
      <h1>Welcome component</h1>
      <Welcome />
      <LanguageContext.Provider value={language}>
        <h1>Clock component</h1>
        <h4>style using sass package</h4>
        <button className="clock-button" onClick={() => handleSetLanguage("en")}>EN</button>
        <button className="clock-button" onClick={() => handleSetLanguage("es")}>ES</button>
        <Clock />
      </LanguageContext.Provider>
      <h1>TodoList component</h1>
      <h4>style using CSS Modules</h4>
      <TodoList />
      <h1>UncontrolledLogin component</h1>
      <h4>style with tailwindcss package</h4>
      <UncontrolledLogin />
      <h1>FocusableInput component</h1>
      <h4>style with react-bootstrap package</h4>
      <FocusableInput />
    </Container>
    <br />
    <GitHubUser username={"josecalerom"} />
    <br />
    <GitHubUsers />
    </>
  );
}
