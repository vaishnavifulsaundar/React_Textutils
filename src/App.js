import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

let name="Vaish"
function App() {
  return (
 <>
<Navbar title="TextUtils"/>
<div className="container my-3">
<Textform heading="Enter the text to analyse"></Textform>
</div>
 </>
  );
}

export default App;
