import {BrowserRouter as Router ,Route, Switch,Link} from 'react-router-dom';
import Link1 from './Link1';
import Link2 from './Link2';
import Link3 from './Link3';
import Home from './Home';

import './App.css';

function App() {
  return (
    <div className="App">
 <h1>HEllo world</h1>
 <Router>
<nav>
<Link to='/home'>Home</Link>
<Link to='/link1'>Link1</Link>
<Link to='/link2'>Link2</Link>
<Link to='/link3'>Link3</Link>
</nav>
<div className="center">
  <Switch>
<Route path="/home" component={Home} />
<Route exact path="/link1" component={Link1} />
<Route exact path="/link2" component={Link2} />
<Route exact path="/link3" component={Link3} />
  </Switch>
</div>
 </Router>

    </div>
  );
}

export default App;
