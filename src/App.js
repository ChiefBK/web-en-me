import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Events() {
    return (
        <div>
            <h2>Events</h2>
            <div className="event__list-container">
                <div className="event__list-item">
                    BBQ at the beach
                </div>
                <div className="event__list-item">
                    Birthday Party!
                </div>
                <div className="event__list-item">
                    Housewarming
                </div>
            </div>
        </div>
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

function Header() {
    return (
        <nav className="navigation__container">
            <ul>
                <li>
                  <Link to="/">
                      <div className="navigation__header-icon"></div>
                  </Link>
                </li>
                <li>
                    <Link to="/events" className="header-link">Events</Link>
                </li>
                <li>
                    <Link to="/" className="header-link">Home</Link>
                </li>
                <li>
                    <Link to="/plex" className="header-link">Plex</Link>
                </li>
            </ul>
        </nav>
    );
}

function Home() {
  return (<div></div>)
}

function ContentContainer(props) {
    return (
        <div className="content__container">
            {props.children}
        </div>
    )
}

function App() {
  return (
      <Router>
          <div>
              <Header/>
              <ContentContainer>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/events" component={Events} />
                    <Route path="/plex" component={Plex} />
                  </Switch>
              </ContentContainer>
          </div>
      </Router>
  );
}

export default App;
