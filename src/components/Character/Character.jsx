import { useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";

export const Character = ({ id }) => {
  const [data, setData] = useState("");
  const [isRotated, setIsRotated] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        const processedResponse = await response.json();
        setData(processedResponse);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  const { name, species, status, image} = data;

  const rotateImgFunction = () => {
    setIsRotated(!isRotated)
  }

  return (
    <div className="flex flex-col gap-3 bg-gray-300 rounded-xl m-2 min-h-[400px] justify-between shadow-lg hover:scale-105 transition-transform duration-200">
        <img className={`w-72 overflow-hidden rounded-xl cursor-pointer ${isRotated ? "rotate-180" : ""}`} src={image} alt={name} onClick={rotateImgFunction} />
        <h1 className="max-w-[288px] leading-none px-4 text-2xl font-bold">{name}</h1>
        <div className="flex px-4 pb-3 justify-between">
            <p className="text-lg">{species}</p>
            <p className={`text-lg ${status === "Alive"? "text-green-800" : "text-red-800"}`}>{status}</p>
        </div>
    </div>
  );
};

Character.propTypes = {
    id: PropTypes.number
}
