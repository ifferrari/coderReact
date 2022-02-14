import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemCount from '.components/ItemCount.js'

function App() {
  return (
    <div className="App">
      <NavBar tittle = "eCommerce React"/>
      <itemListContainer greeting="Bienvenidos al eCommerce React!" />
      <ItemCount stock="10" initial = "0" onAdd />
    </div>
  );
}

export default App;
