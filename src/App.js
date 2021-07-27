
import './App.css';
import Descreption from './Profile/component'



function App() {
  const handleName =(x)=>{
    alert (`hi ${x}` )
  }
  return (
    <div className="App">
    <Descreption   name="Molk Naddari" bio="molk naddari from kasserine student in Go My Code" profession="devlopper" handleName={ handleName}  >
      <img src="nature.jpg"></img>
    </Descreption>
           
    </div>
  );
}

export default App;
