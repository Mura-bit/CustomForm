import './App.css';
import SignUpForm from './containers/signUpForm/SignUpForm.jsx';
import SignUpFormCopy from "./containers/signUpForm/SignUpFormCopy.jsx";

function App() {
  return (
    <div className="app-container">
      <SignUpForm />
      <SignUpFormCopy />
    </div>
  );
}

export default App;
