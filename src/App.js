import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {lazy , Suspense} from 'react'
import {LOGIN,HOME} from "./constants/paths"

const Login = lazy(() => import('./pages/login'));
function App() {
  return (
    <>
      <Router>
        <Suspense fallback = {<p>Loading...</p>}>
      <Routes>
        <Route exact path = {LOGIN} element = {<Login/>}/>
      </Routes>
        </Suspense>
    </Router>
    </>
  );
}

export default App;
