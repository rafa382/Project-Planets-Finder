import React from 'react';
import GlobalProvider from './context/GlobalProvider';
import Pages from './components/Pages';
import './CSS/App.css';

function App() {
  return (
    <GlobalProvider>
      <Pages />
    </GlobalProvider>
  );
}

export default App;
