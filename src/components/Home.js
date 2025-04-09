import React from "react";

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export const username = "Liza";
export const city = "New York";
export default Home;