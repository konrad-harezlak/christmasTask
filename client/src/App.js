import logo from './logo.svg';
import './App.css';
import react from 'react';

function App() {
  const handleAddElf = async (e) => {
    e.preventDefault();


  }
  const handleAddPackage = async (e) => {
    e.preventDefault();


  }
  return (
    <div className="main-container">
      <div className="elf-container">
        <div className="elves">
          elf
        </div>
        <div className="elves-input-container">
          <form onSubmit={(e) => handleAddElf(e)}>
            <input className="elf-name" placeholder="First name"></input>
            <input className="last-name" placeholder="Last name"></input>
            <button>Submit</button>
          </form>
        </div>
      </div>
      <div className="package-container">
        <div className="packages">
          paczka
        </div>
        <div className="packages-input-container">
          <form onSubmit={(e) => handleAddPackage(e)}>
            <input className="package-name" placeholder="Name"></input>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
