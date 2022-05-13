import Numberbtn from './components/NumberBtn'
import Figurebtn from './components/FigureBtn';
import DisabledBtn from './components/DisabledBtn';
import NumberToggleGroup from './components/NumberButtons';
import FigureToggleGroup from './components/FigureButtons';

function App() {
  return (
    <div className="App">

      <header className="App-title">
        <p>Match the words to the numbers</p>
        <p className="App-header">
          Click the word and then the number. Match all the pairs to continue.
        </p>
        <div className = "functionalAttempt">
        <NumberToggleGroup/>
        <FigureToggleGroup/>
        </div>

          <div className = "numbers">
            <Numberbtn text="Two"></Numberbtn>
            <Numberbtn text="Six"></Numberbtn>
            <Numberbtn text="Four"></Numberbtn>
            <Numberbtn text="One"></Numberbtn>
            <DisabledBtn text="Three"></DisabledBtn>
          </div>
          <div className = "figures">
            <DisabledBtn text="3"></DisabledBtn>
            <Figurebtn text="4"></Figurebtn>
            <Figurebtn text="2"></Figurebtn>
            <Figurebtn text="5"></Figurebtn>
            <Figurebtn text="1"></Figurebtn>
          </div>
      </header>
    </div>
  );
}

export default App;