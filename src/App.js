import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome.component';
import Counter from './components/counter.component';
import FunctionClick from './components/functionClick.component';
import ClassClick from './components/class-click.component';
import EventBind from './components/event-bind.component';
import ParentComponent from './components/parent-component';
import UserGreeting from './components/user-greeting.component';
import NameList from './components/namelist.component';
import Stylesheet from './components/stylesheet.component';
import Inline from './components/inline';
import Form from './components/form';
import LifecycleA from './components/lifecycleA';


function App() {
  return (
    <div className="App">
      <Welcome name="Vishnu" alias="Sova">
        <p>Blah Blah Blah....</p>
      </Welcome>
      <Welcome name="Jett" alias="Jet" />
      <br />
      <p>following will show method of setting up state and functions</p>
      <Counter />
      <p>Following shows event handling in a function</p>
      <FunctionClick></FunctionClick>
      <p>Following shows event handling in a class</p>
      <ClassClick></ClassClick>
      <br />
      <br />
      <p>The following will describe four methods of event binding</p>
      <EventBind></EventBind>
      <br />
      <br />
      <br />
      <br />
      <p>The following will pass a function from parent.js to child.js and in return
      get another prop from child and use it in the function in parent.js</p>
      <ParentComponent></ParentComponent>
      <br />
      <br />
      <br />
      <p>Conditional Rendering... if else...element variables... ternary conditional operator... short circuit operator</p>
      <UserGreeting />
      <br />
      <br />
      <br />
      <p>Rendering a list using Map</p>
      <NameList />
      <br />
      <br />
      <br />
      <p></p>
      <Stylesheet primary={true} />
      <Inline />
      <br />
      <br />
      <br />
      <p>Handling Forms</p>
      <Form />
      <br />
      <br />
      <br />
      <p>Lifecycle Methods:: <br />Mounting: constructor, static getDerivedStateFromProps, render and componentDidMount
      <br />Updating: static getDerivedStateFromProps, shouldComponentUpdate, render,
        getSnapshotBeforeUpdate and componentDidUpdate
      <br />Unmounting: componentWillUnmount
      <br />Error Handling: static getDerivedStateFromError and componentDidCatch</p>
      <br />
      <br />
      <br />
      <p>Mounting Lifecycle methods</p>
      <LifecycleA/>
    </div>
  );
}

export default App;
