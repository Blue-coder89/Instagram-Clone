import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import React, {lazy , Suspense} from 'react'
import {LOGIN,HOME,SIGNUP,NOTFOUND} from "./constants/paths"
const Login = lazy(() => import('./pages/login'));
const Signup = lazy(() => import('./pages/signup'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
      React.useEffect(() => {
        document.title = "Home - instagram";
      },[]);
  return (
    <>
      <Router>
        <Suspense fallback = {<p>Loading...</p>}>
      <Routes>
        <Route exact path = {LOGIN} element = {<Login/>}/>
        <Route exact path = {SIGNUP} element = {<Signup/>}/>
        <Route exact path = {NOTFOUND} element = {<NotFound/>}/>
      </Routes>
        </Suspense>
    </Router>
    </>
  );
}

export default App;
