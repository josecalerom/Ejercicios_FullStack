export function UncontrolledLogin() {
    function handleFormSubmit(event) {
        event.preventDefault();

    
    //Accessing values of the form with FormData API
    const formData = new FormData(event.target);

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      remember: formData.get("remember") === "on" ? true : false,
    };


    //Accessing values of the form without FormData API
    // const username = event.target.elements.namedItem("username").value;
    // const password = event.target.elements.namedItem("password").value;
    // const remember = event.target.elements.namedItem("remember").checked;
    // const data = {username, password, remember}

    //Attempt to access the values of the form by using the FormData API.
    //Q: What are the advantages? What are the disadvantages?
    //A: It provides a way to easily store key-value pairs in relation to HTML form fields and values
    //However older browsers do not support this feature

    console.log(data);
  }


    return (
        <form onSubmit={handleFormSubmit}>
        <input
          placeholder="Your name"
          name="username"
          type="text"
        />
        <input
          placeholder="Password"
          name="password"
          type="password"
        />
        <input
          name="remember"
          type="checkbox"
        />
        <button>Login</button>
        <button type="reset">Reset</button>
      </form>
    );
}