import React from 'react';
import { Switch, Route, withRouter } from 'react-router';

import CustomerDetails from './customerDetails/CustomerDetails';
import SearchGyms from './searchGyms/SearchGyms';
import Enrollments from './customerEnrollments/Enrollments';
import Promotion from './promotion/Promotion';
import MyEnrollments from './myEnrollments/MyEnrollments';

class CustomerBundle extends React.Component {
  
  render() {
    return (
      <Switch>
        <Route path="/app/customer/customerDetails" exact component={CustomerDetails} />
        <Route path="/app/customer/search" exact component={SearchGyms} />
        <Route path="/app/customer/enrollments" exact component={Enrollments} />
        <Route path="/app/customer/promotions" exact component={Promotion} />
        <Route path="/app/customer/myenrollments" exact component={MyEnrollments} />
      </Switch>);
  }
}

export default withRouter(CustomerBundle);
