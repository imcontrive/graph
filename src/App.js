import './App.css';
// import GoogleLoginButtonView from './components/GoogleLoginButtonView';
import LoginButton from './components/LoginButton';
import { GoogleLogin } from '@react-oauth/google';

function App() {
  const responseMessage = (response) => {
    console.log(response);
};
const errorMessage = (error) => {
    console.log(error);
};
  return (
    <div className="App">
      <h3>Graph demo</h3>
     <LoginButton />
     {/* <GoogleLoginButtonView /> */}
     <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
  );
}

export default App;
