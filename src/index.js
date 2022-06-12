import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FirebaseContext from "./context/firebase";
import {firebase , fieldValue} from "./lib/firebase"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value = {{firebase,fieldValue}}>
    <App />
    </FirebaseContext.Provider>
  </React.StrictMode>
);

