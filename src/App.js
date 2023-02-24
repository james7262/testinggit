import React from "react";
import Countdown from "react-countdown";

const Completionist = () => <span style = {{
  color: 'red', 
  fontWeight: 'bold', 
  fontSize: 52}}>
  You are good to go!</span>;

const renderer = ({hours, minutes, seconds, completed}) => {
  if (completed) {
    return <Completionist />;
  } else {
    return <span>{hours}:{minutes}:{seconds}</span>
  }
};

function App() {
  return (
    <div style = {{
      textAlign: 'center',
      fontWeight: 'bold',
      backgroundColor: 'black',
      color: 'white',
      fontSize: 52,
      height: '100vh',
      overflow: 'auto'
    }}>
      <h2>Countdown</h2>
      <div style = {{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
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
