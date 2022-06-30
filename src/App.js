import './App.css';
import React,{useState} from 'react';
import LoginForm from './Component/LoginForm';
import LoginImage from './Component/LoginImage';
import WelcomePage from './Component/WelcomePage'

function App() {
  const [isSubmitted, setIsSubmitted] = useState(true);
  const [name, setName] = useState("")
  const onSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(false)
  }
  const onChange = ({target: {value}}) =>{
    setName(value)
  }
  return (
    <div className="App">
      <div className='container-fluid'>
        { isSubmitted ?<div className='row'>
          <LoginImage />
          <LoginForm onSubmit={onSubmit} name={name} onChange={onChange} />
        </div> : <WelcomePage userName={name} />}
      </div>
    </div>
  );
}

export default App;
