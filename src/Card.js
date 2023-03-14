import React, { useState } from "react";
import data from "./data";

const Card = () => {
  const [user, setUser] = useState(data);
  return (
    <div className="container">
      <h1 className="title">{`${user.length} Birthday Today`}</h1>
      {user.map((item) => {
        const { age, name, id, image } = item;
        return (
          <div className="list" key={id}>
            <img src={image} alt={name} />
            <div className="info">
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </div>
        );
      })}
      <button className="btn" onClick={() => setUser([])}>
        Clear
      </button>
    </div>
  );
};

export default Card;
