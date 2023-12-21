import './App.css';
import react, { useState, useEffect } from 'react';
import api from './api.js';

function App() {
  const [packageName, setPackageName] = useState('');
  const [elfData, setElfData] = useState({
    name: '',
    lastName: ''
  })
  const handlePackageInputChange = (e) => {
    setPackageName(e.target.value)
  }

  const handleElfInputChange = (e) => {
    const { name, value } = e.target;
    setElfData({
      ...elfData,
      [name]: value
    });
  };

  const handleAddElf = async (e) => {
    e.preventDefault();
    try {
      await api.post('/addElf', elfData);
    }
    catch (err) {
      console.log(err);
    }


  }
  const handleAddPackage = async (e) => {
    e.preventDefault();
    try {
      console.log(packageName)
      await api.post('/addPackage', {packageName});
    }
    catch (err) {
      console.log(err);
    }

  }
  return (
    <div className="main-container">
      <div className="elf-container">
        <div className="elves">
          elf
        </div>
        <div className="elves-input-container">
          <form onSubmit={(e) => handleAddElf(e)}>
            <input 
            className="elf-name" 
            onChange={handleElfInputChange} 
            placeholder="First name"></input>
            <input 
            className="last-name" 
            onChange={handleElfInputChange} 
            placeholder="Last name"/>
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
            <input
             className="package-name"
              onChange={handlePackageInputChange}
              value={packageName}
              name='packageName'
               placeholder="Name"/>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
