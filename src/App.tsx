import "./App.css";
import Button from "./components/Button";
import Greet from "./components/Greet";
import GreetPersonArr from "./components/GreetPersonArr";
import Hero from "./components/Hero";
import Status from "./components/Status";

function App() {
  const name = {
    fName: "Ravi",
    lName: "Teja",
  };

  const nameList = [
    {
      fName: "Ravi",
      lName: "Teja",
    },
    {
      fName: "Sai",
      lName: "Teja",
    },
    {
      fName: "Ravi",
      lName: "Teja",
    },
    {
      fName: "Sai",
      lName: "Teja",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  return (
    <div className="App">
      <Greet name={name} />
      {/* <GreetPersonArr names={nameList} /> */}
      {/* <Status status="loading" /> */}
      {/* <Hero name="Ravi">
        <Status status="success" />
      </Hero> */}
      <Button
        handleClick={() => console.log("Button Clicked")}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
