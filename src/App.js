import "./App.css";

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastname}</h2>
      <h2>Age: {props.age}</h2>
    </>
  );
};

const App = () => {
  const name = "Dastan";
  const isUserLoggedIn = false;

  return (
    <div className="App">
      <Person name="Dastan" lastname="Akatov" age={19} />
      <Person name="Sultan" lastname="Toktamambetov" age={18} />
      <Person />
    </div>
  );
};

export default App;
