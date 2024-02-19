import logo from './logo.svg';
import './App.css';
import FunctionComp from './Component/FunctionComponent';
import ClassComp from './Component/ClassComponent';
import MyStateComp from './Component/MyStateComponent';
import MethodEventComp from './Component/MethodEventComp';
import CircleTask from '../src/Component/Task/CircleTask';
import UseStateHookComp from './Component/Hooks/UseStateHookComp';
import ParentComp from './Component/ParentComponent';
import ChildComp from './Component/ChildComponent';
function App() {
  return (
    <div className="App">
     {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/}
   
    <h1>Welcome You All In react Session </h1>
     {/*<FunctionComp/>
    <FunctionComp myName="panchashil" age={32}/>
    <ClassComp address="Pune" age ="32"/>
    <ClassComp/>
     <MyStateComp address="pune" contact="9604024184"/>
     <MyStateComp /> 
     <MethodEventComp/>
     <CircleTask/>
     <UseStateHookComp/>*/}
     <ParentComp/>
     <ChildComp/>
    </div>
  );
}
export default App;
