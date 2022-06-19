
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from'./components/Login'
import Select from'./components/Select'
import Certificate from './components/Certificate';
import Signin from './components/Signin';
import Hash from './components/Hash';
import Verified from './components/Verified';


function App() {
  return (
   <>

   <Navbar/> 
       <Router>
           <div>
               <Switch>
                   <Route exact path="/" component={ Home} />
                   <Route path="/login" component={ Login} />
                   <Route path="/Select" component={ Select } />
                   <Route path="/Certificate" component={ Certificate } />
                   <Route path="/Signin" component={ Signin} />
                   <Route path="/Hash" component={ Hash} />
                   <Route path="/Verified" component={ Verified} />

               </Switch>
           </div>
       </Router>
       </>
  );
}

export default App;











