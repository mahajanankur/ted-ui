/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Switch, Route, withRouter } from 'react-router';

// an example of react-router code-splitting
/* eslint-disable */
/* eslint-enable */

import s from './Layout.scss';
import Bundle from '../../core/Bundle';

// Dashboard component is loaded directly as an example of server side rendering
import Dashboard from '../../pages/dashboard/Dashboard';

class Layout extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false,
    };
  }

  render() {
    return (
      <div className={s.root}>
        <div className={[s.wrap].join(' ')}>
          <main className={s.content}>
            <Switch>
              <Route path="/app" exact component={Dashboard} />
              <Route component={NotFoundBundle} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(s)(Layout));
