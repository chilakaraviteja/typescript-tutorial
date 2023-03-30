import './App.css';
import Greet from './components/Greet';
import GreetPersonArr from './components/GreetPersonArr';

function App() {
  const name = {
    fName: 'Ravi',
    lName: 'Teja'
  }

  const nameList = [
    {
      fName: 'Ravi',
      lName: 'Teja'
    },{
      fName: 'Sai',
      lName: 'Teja'
    },{
      fName: 'Ravi',
      lName: 'Teja'
    },{
      fName: 'Sai',
      lName: 'Teja'
    }  
  ]
  return (
    <div className="App">
      <Greet name={name} />
      <GreetPersonArr names={nameList}/>
    </div>
  );
}

export default App;
