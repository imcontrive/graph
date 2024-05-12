import { useState } from 'react';
import './App.css';
import { GoogleLogin } from '@react-oauth/google';
import Graph from './components/Graph';
import ShopGraph from './components/ShowGraph';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const responseMessage = (response) => {
    setIsLoggedIn(true)
    console.log(response, ':onSuccess');
  };

  const errorMessage = (error) => {
    console.log(error, ":onError");
  };

  return (
    <div className="App">
      {/* <h3 className='title'>Google Login & Plotly.js Graphs Demo</h3> */}

      {!isLoggedIn ? (
        <div className='login'>
          <div className='login-btn'>
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
          </div>
        </div>
      ) : (
        <>
          <ShopGraph />
          <Graph />
        </>
      )}
    </div>
  );
}

export default App;
