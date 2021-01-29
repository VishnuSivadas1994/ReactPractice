import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome.component';
import Counter from './components/counter.component';

function App() {
  return (
    <div className="App">
      <Welcome name="Vishnu" alias="Sova">
        <p>Blah Blah Blah....</p>
      </Welcome>
      {/* <Welcome name="Jett" alias="Jet"/> */}
      <br/>
      <Counter/>
    </div>
  );
}

export default App;
