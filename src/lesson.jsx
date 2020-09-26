import React, { useState } from "react";

const Lesson = () => {
  const [count, addCount] = useState({ counter: 0 });
  function updateCounter() {
    addCount({ counter: count.counter + 1 });
  }
  return (
    <>
      <center>
        <button onClick={updateCounter}>CLick</button>
        <p>{count.counter}</p>
      </center>
    </>
  );
};

export default Lesson;
