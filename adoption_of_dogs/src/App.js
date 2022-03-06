import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import NavbarApp from './components/NavbarApp';
import { logIn } from './redux/userConncection';
import AllRoutes from './pages/routingAppPages';
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    if(localStorage.getItem('User').length > 25){

const a =JSON.parse(localStorage.getItem('User'))
     dispatch(logIn({email:a.email,password:a.password,dogsList:a.dogsList}))
    }
  },[])
  return (
    <div className="App">
      <div className="navbar">
        <NavbarApp />
      </div>
      <div className="bodyApp">
        <AllRoutes />
      </div>
    </div>
  );
}

export default App;
