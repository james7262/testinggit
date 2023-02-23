import React from "react";
import Countdown from "react-countdown";

const Completionist = () => <span>You are good to go!</span>;

const renderer = ({hours, minutes, seconds, completed}) => {
  if (completed) {
    return <Completionist />;
  } else {
    return <span>{hours}:{minutes}:{seconds}</span>
  }
};

function App() {
  return (
    <div>
      <h2 style = {{textAlign : 'center'}}>Countdown</h2>
      <div style = {{textAlign : 'center'}}>
        <Countdown
          date = {Date.now() + 10000}
          renderer = {renderer}
        >
          <Completionist />
        </Countdown>
      </div>
    </div>
  );
}

export default App;
