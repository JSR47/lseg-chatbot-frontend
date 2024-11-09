
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Home from './pages/Home'
import Welcome from './pages/Welcome';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Welcome/>
        <Home/>
    </div>
  );
}

export default App;
