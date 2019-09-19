import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Events() {
    return (
        <h2>Events</h2>
    );
}

function Plex({ match }) {
    return <h3>Plex</h3>;
}

// function Plex(a) {
//     return (
//         <div>
//             <h2>Topics</h2>
//
//             <ul>
//                 <li>
//                     <Link to={`${a.match.url}/components`}>Components</Link>
//                 </li>
//                 <li>
//                     <Link to={`${a.match.url}/props-v-state`}>Props v. State</Link>
//                 </li>
//             </ul>
//
//             <Route path={`${a.match.path}/:id`} component={Topic} />
//             <Route
//                 exact
//                 path={a.match.path}
//                 render={() => <h3>Please select a topic.</h3>}
//             />
//         </div>
//     );
// }

function Home() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/events">Events</Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/plex">Plex</Link>
                </li>
            </ul>
        </nav>
    );
}

function App() {
  return (
      <Router>
          <div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/events" component={Events} />
                <Route path="/plex" component={Plex} />
              </Switch>
          </div>
      </Router>
  );
}

export default App;
