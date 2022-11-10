import React, { useState, useEffect } from "react";

const Search = () => {
  const [query, setQuery] = useState("");

  const [data, setData] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.edamam.com/api/recipes/v2?q=${query}&app_id=a3f740ec&app_key=
56d6f29e3393c24f4a6ef683e9b5e5a9&type=public`
    )
      .then((Response) => Response.json())
      .then((data) => {
        console.log(data.hits);
        const arrayData = data.hits;
        setData(arrayData);
      });
      // eslint-disable-next-line 
  }, [isClicked]);

  return (
    <div>
      <div className="header">
        <input type="text"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder="Find the best recipe.."
        ></input>
        <button onClick={() => { setIsClicked((prevState) => !prevState);  }} > Search
        </button>
      </div>
      <div className="display">
        {/* //looping through recipes */}
        {data.map((item, i) => {
          return (
            <div key={i} className="display-cards">
              <img src={item.recipe.image} className="images" alt=""/> <br />
              <h4>{item.recipe.label}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;