import React from 'react';
import './style/style.css';
import Bookmarks from "./app/Bookmarks";
import Logo from './app/Logo'
import SearchField from "./app/SearchField";


function App() {

  return (
      <>
          <Logo/>
          <SearchField/>
          <Bookmarks />         
      </>
  );
}

export default App;