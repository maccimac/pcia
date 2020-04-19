import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './core/Home'
import About from './core/About'
import Membership from './core/Membership'
import ContactUs from './core/ContactUs'
import ComingSoon from './core/ComingSoon'
import MemberAccess from './core/MemberAccess'
import Directory from './core/Directory'
import Events from './core/Events'
import AdminAccess from './core/AdminAccess'
import Admin from './admin'
import AdminMembers from './admin/AdminMembers'
import AdminAddMember from './admin/AdminAddMember'
import AdminEditMember from './admin/AdminEditMember'


const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/home" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/membership" exact component={Membership}/>
        <Route path="/members-only" exact component={MemberAccess}/>
        <Route path="/members-only/directory" exact component={Directory}/>
        <Route path="/contact-us" exact component={ContactUs}/>
        <Route path="/events" exact component={Events}/>
        <Route path="/admin-access" exact component={AdminAccess}/>
        <Route path="/admin/home" exact component={Admin}/>
        <Route path="/admin/members" exact component={AdminMembers}/>
        <Route path="/admin/members/add" exact component={AdminAddMember}/>
        <Route path="/admin/members/edit/:memberId" exact component={AdminEditMember}/>

      </Switch>
    </BrowserRouter>
  )
}


export default Routes;
