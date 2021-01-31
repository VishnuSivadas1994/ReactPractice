import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome.component';
import Counter from './components/counter.component';
import FunctionClick from './components/functionClick.component';
import ClassClick from './components/class-click.component';
import EventBind from './components/event-bind.component';
import ParentComponent from './components/parent-component';

function App() {
  return (
    <div className="App">
      <Welcome name="Vishnu" alias="Sova">
        <p>Blah Blah Blah....</p>
      </Welcome>
      <Welcome name="Jett" alias="Jet" />
      <br />
      <Counter />
      <FunctionClick></FunctionClick>
      <ClassClick></ClassClick>
      <br/>
      <br/>
      <EventBind></EventBind>
      <br/>
      <br/>
      <br/>
      <br/>
      <ParentComponent></ParentComponent>
    </div>
  );
}

export default App;
