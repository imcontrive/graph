// import React, { useState } from 'react';
// import GoogleLoginButtonView from './components/GoogleLoginButtonView';
// import Graph from './components/Graph';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLoginSuccess = (idToken) => {
//     // Handle successful login
//     console.log('Login successful. ID Token:', idToken);
//     setIsLoggedIn(true);
//   };

//   const handleLoginFailure = (error) => {
//     // Handle failed login
//     console.error('Login failed:', error);
//   };

//   return (
//     <div className="App">
//       {!isLoggedIn ? (
//         <GoogleLoginButtonView
//           onSuccess={handleLoginSuccess}
//           onFailure={handleLoginFailure}
//         />
//       ) : (
//         <Graph />
//       )}
//     </div>
//   );
// };

// export default App;


import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

function App() {
    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };
    return (
        <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
    )
}
export default App;
