
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';

function App() {
  return (
    <>
{/* <Navbar title={3}  about="About ME"/> */}
    <Navbar/>
  <div className='container my-5'>
  {/* <TextForm heading="Enter the TextForm"/>    */}
  <About/>
  </div>
    
    </>
  );
}

export default App;
