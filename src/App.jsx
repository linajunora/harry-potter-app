import { useState, useEffect } from 'react';
import { fetchCharacters } from './hpApi';
import './components/Header';
import './App.css';
import Header from './components/Header';


function App() {
  //State the variable 'characters', initial value: is empty arr
  //Updater: setCharacters = when you call this, React schedules a re-render with new list
  const [characters, setCharacters] = useState([]);

  //State the variable 'error'
  //initial value = null (meaning no error yet)
  //update: setError(message) - triggers a re-render so you can show error in the UI 
  const [error, setError] = useState(null);
  
  //initialize darkMode from localStorage, or default to false
  const [darkMode, setDarkMode] = useState(() => {
      const saved = localStorage.getItem('darkMode');
      return saved === 'true'; //convert string to boolean
  });

  useEffect(() => {
    fetchCharacters()
    //runs if the request succeeds
    .then((data) => {
      console.log("Fetched characters:", data);
      setCharacters(data);
    })
    .catch((error) => setError(error.message));
  }, []);

  //when darkMode changes and component mounts, update body class + save to localStorage
  useEffect(() => {
    //if condition is true, add class the class
    //if condiiton is false, rmeove class
    document.body.classList.toggle('dark', darkMode);
    document.body.classList.toggle('light', !darkMode);

    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
  
    <>
    <Header darkMode={darkMode} onToggleDarkMode={() => setDarkMode(!darkMode)} />
      <h2>Harry Potter Characters</h2>

      {/*Error handling*/}
      {error && <p style={{color: 'red'}}>{error}</p>}
    </>
  )
}

export default App
