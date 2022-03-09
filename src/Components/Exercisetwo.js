import React, { useState } from "react";
import "../Style/ExerciseTwo.css";

const Exercisetwo = () => {
  const [num, setNum] = useState("abs");
  const [data, setData] = useState([]);

  const Workout = () => {
    fetch(`https://exercisedb.p.rapidapi.com/exercises/target/${num}`, {
      method: "GET",
      params: { limit: "6", page: "1" },
      headers: {
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        "x-rapidapi-key": "bf2be0966dmsh98991ad37ebce68p17befajsn2fa53e6c8585",
      },
    })
      .then((response) => response.json())
      .then((jsonData) => {
        var res = jsonData;
        console.log(res);
        if (res.length > 24) {
          res.length = 24;
        }
        setData(res);
      })
      .catch((error) => console.log(error));
  };
  var HandleChange = (e) => {
    e.preventDefault();
    Workout();
  };
  return (
    <div className="workout">
      <h1>Let's Workout Today for {num}</h1>
      <div className="workout-info">
        <input
          type="text"
          placeholder="   Type here"
          onChange={(e) => setNum(e.target.value)}
        />
        <center>
          <button onClick={HandleChange}>Search</button>
        </center>
      </div>
      <div className="wk-6">
        {data.map((element) => (
          <div className="workout-container">
            <div className="workout-details">
              <h3>
                <span>Bodypart :</span>
                {element?.bodyPart}
              </h3>
              <h3>
                <span>Equipment :</span>
                {element?.equipment}
              </h3>
              <h3>
                <span>Name :</span>
                {element?.name}
              </h3>
              <h3>
                <span>Target:</span>
                {element?.target}
              </h3>
              <center>
                <img src={element?.gifUrl} alt="" width="150vw" />
              </center>
              <mark>HealthCare</mark>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exercisetwo;
