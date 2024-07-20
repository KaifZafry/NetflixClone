import React, { useRef } from "react";
import language from "../utils/languageConstants"
import { useSelector } from "react-redux";
import openai from "../utils/openai";

const SearchBar = () => {
  const SearchText= useRef(null);
  const langKey= useSelector(store=> store.config.lang);

  const handleGptSearchClick= async()=>{
    console.log(SearchText.current.value);

// make an api call to get the movies results 
const gptQuery= "Act as a Movie Recommendation system and suggest some movies for the query "+SearchText.current.value+ ". and only give me the names of 5 movies also with , comma seprated like the example result given ahead. Example : Gadar,Golmal, Koi mil gaya, Don, Hera Pheri "

const gptresults=  await openai.chat.completions.create({
    messages: [{ role: 'user', content: gptQuery}],
    model: 'gpt-3.5-turbo',
  });
  console.log(gptresults.choices);


  
}

  return (
    <div className="flex justify-center items-center pt-[50%] md:pt-[20%] text-center w-full md:w-1/2  mx-auto">
      <div className=" bg-black  w-full z-20  rounded-lg">
        <form action="" className="flex flex-row" onSubmit={(e)=> e.preventDefault()}>
        <input
          ref={SearchText}
          className="p-2 px-4 m-4 rounded-lg w-4/5"
          type="text"
          placeholder={language[langKey].suggestion}
        />
        <button 
        onClick={handleGptSearchClick}
        className="bg-red-500 px-3 py-1 m-4 rounded-lg">{language[langKey].word}</button>
      
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
