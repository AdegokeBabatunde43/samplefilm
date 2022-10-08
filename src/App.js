import './App.css';
import React, {useState} from 'react'
import Banner from './components/Banner';
import Form from './components/Form';
import ListContext from './components/ListContext';
import MovieProvider from './MovieContext';

function App() {
const [theme, setTheme]=useState('dark')
const toogleTheme= ()=> {
  setTheme(theme === 'dark' ? 'light': 'dark' )
}


  return (
    <div className={theme}>
     <MovieProvider>
      <button onClick={toogleTheme}>{theme == 'dark' ? 'light': 'dark'}</button>
      <Form />
      <Banner />
      <ListContext/>
     </MovieProvider>
    </div>
  );
}

export default App;
