import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div class='container'>
        <div class = 'row text-center'>
          <div class='col m-2'></div>
          <div class='col m-2'><ItemListContainer class='col'/></div>
          <div class='col m-2'></div>
        </div>        
      </div>      
    </div>
    
  );
}

export default App;
