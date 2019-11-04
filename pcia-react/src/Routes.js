import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './core/Home'
import About from './core/About'
import Membership from './core/Membership'
import ContactUs from './core/ContactUs'
import ComingSoon from './core/ComingSoon'
import Events from './core/Events'


const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ComingSoon}/>
        <Route path="/home" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/membership" exact component={Membership}/>
        <Route path="/contact-us" exact component={ContactUs}/>
        <Route path="/events" exact component={Events}/>

      </Switch>
    </BrowserRouter>
  )
}


export default Routes;
