// import logo from './logo.svg';
import './App.css';
import Classprops from './components/Classprops';
import Functionprops from './components/Functionprop';

function App() {
  return (
    <div>
      <Classprops name="Learner 1" place="Lagos">
        <p>Child Component</p>
      </Classprops>
      <Classprops name="Learner 2" place="Mumbai"><button>Click</button></Classprops>
      <Classprops name="Learner 3" place="Ilorin"/>
      <Functionprops name="learner 4" place="Oyo"/>
    </div>
  );
}

export default App;
