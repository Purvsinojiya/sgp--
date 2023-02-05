import './App.css';
import Prenavbar from './Prenavbar';
import Nav from './nav.js';
import Slider from './Slider.js';
import data from './data'
import Line from './line.js';
import Offers from './offers.js';

function App() {
  return (
    <div className="App">
      <Prenavbar/>
      <Nav/>
      <Slider/>
      <Line/>
      <Offers  offer={data.offer}/>
  
    </div>
  );
}

export default App;
