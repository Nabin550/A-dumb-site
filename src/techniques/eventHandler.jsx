//here if u create different MyClickButton u will have different different count for all of them
//create one where all have same count if multiple this component are created.

import { useState } from "react";

export default function MyClickButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return <button onClick={handleClick}>{count} times clicked</button>;
}

// function MyButtons(count, onClick) {
//   return <button onClick={onClick}>Clicked {count} times</button>;
// }
