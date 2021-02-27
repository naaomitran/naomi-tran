import { Link, BrowserRouter as Router, Route, Switch, HashRouter } from "react-router-dom";
import HP from './homepage/HP';
import Project from './projects/Project';
import About from './about/About';
import Contact from './contact/Contact'
import { Document, Page } from 'react-pdf' 
// import Resume from '../assets/NTResume.pdf'
// import Res from '../src/NTResume.pdf'
import Resume from './NTResume.pdf';

function App() {
  return (
    <HashRouter basename="/"> 

    <Router>
      <Switch>
        <Route path='/about' component={About} />
          {/* <About /> */}
        {/* </Route> */}
        <Route path='/project' component={Project} />
          {/* <Project /> */}
        {/* </Route> */}
        <Route path='/contact' component={Contact} />
          {/* <Contact /> */}
        {/* </Route> */}
        <Route path='/resume'>
          <Document file={Resume}>
          <Page />
          </Document>
        </Route>
        <Route exact path='/' component={HP} />
          {/* <HP /> */}
        {/* </Route> */}
      </Switch>

    </Router>

    </HashRouter>

    

  );
}

export default App;
