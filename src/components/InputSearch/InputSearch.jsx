import PropTypes from "prop-types";
import { useState } from "react";

export const InputSearch = ({ printCharacters }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    printCharacters(inputValue);
  };

  return (
    <div className="mb-6 flex gap-2">
      <input
        type="number"
        name="input"
        id="input"
        className="border border-gray-300 rounded-md py-1 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
        placeholder="How many characters?"
        value={inputValue}
        onChange={handleInputChange}
        onKeyUp={(event) => {
          if(event.key === "Enter"){
            printCharacters(event.target.value)
          }
        }}  
      />
      <button
        onClick={handleButtonClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Print
      </button>
    </div>
  );
};

InputSearch.propTypes = {
    printCharacters: PropTypes.func,
};
