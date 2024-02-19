import { useState } from "react";
import "./App.css";
import { Character } from "./components/Character/Character";
import { InputSearch } from "./components/InputSearch/InputSearch";

function App() {
  const [numberOfCharacters, setNumberOfCharacters] = useState(12);

  const printCharacters = (number) => {
    if (number == 0) {
      alert('Please enter a number')
    } else {
      const numberAsANumber = Number(number);
      setNumberOfCharacters(numberAsANumber);
    }
  };

  const arrayOfCharacters = [];
  for (let i = 1; i <= numberOfCharacters; i++) {
    arrayOfCharacters.push(i);
  }

  return (
    <>
      <h1 className="font-bold text-2xl pt-3 pb-6">Rick & Morty Characters</h1>
      <InputSearch printCharacters={printCharacters} />
      <ul className="flex flex-wrap justify-center items-center">
        {arrayOfCharacters.map((number, index) => (
          <li key={index}>
            <Character id={number} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
