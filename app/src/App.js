import logo from './logo.svg';
import './App.css';
import AppIncreDecre from './UseStateHook/AppIncreDecre';
import AppToggleButton from './UseStateHook/AppToggleButton';
import AppForm from './UseStateHook/AppForm';
import ToDoList from './UseStateHook/ToDoList';
import ProfileForm from './UseStateHook/ProfileForm';
// import IncreDecre from './UseStateHook/IncreDecre';
import Visibility from './UseStateHook/Visibility';
import ToDo_List from './UseReducer/Todo_List';
import ShoopingCart from './UseReducer/ShoopingCart';
import Form from './UseReducer/Form';
import Accordion from './UseReducer/Accordion';
import Countdown from './useRef/Countdown';
import TrackingPreviousValue from './useRef/TrackingPreviousValue';
import Animation from './useRef/Animation';
import Debounce from './useRef/Debounce';
import KeyPress from './useRef/KeyPress';
import ExpensiveCalculation from './UseMemo/ExpensiveCalculation';
import List from './UseMemo/List';
import Aggregate from './UseMemo/Aggregate';
import MemoStyles from './UseMemo/MemoStyles';
import IncreDecre from './UseCallback/IncreDecre';
import EnterKeyPress from './UseCallback/EnterKeyPress';
import Multiplication from './UseCallback/Multiplication';

function App() {
  return (
    <div className="App">
      <Multiplication/>
    </div>
  );
}

export default App;
