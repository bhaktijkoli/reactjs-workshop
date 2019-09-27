import React, {useState} from 'react';

let App = (props) => {
  let [count, setCount] = useState(0);
  setInterval(function () {
    setCount(count + 1);
  }, 1000);
  return(
    <div>
      <h1>Hello {props.name}</h1>
      <h3>Age {props.age}</h3>
      <h1>{count}</h1>
    </div>
  )
}

export default App;
