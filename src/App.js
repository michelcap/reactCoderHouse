import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="Venta de Vehiculos"/>
    </div>
    
  );
}

export default App;
