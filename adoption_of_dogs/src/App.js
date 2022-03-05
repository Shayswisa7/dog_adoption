import './App.css';
import NavbarApp from './components/NavbarApp';
import AllRoutes from './pages/routingAppPages';
function App() {
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
