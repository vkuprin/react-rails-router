import React, {Suspense, lazy} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './index.scss'

const HelloWorld = lazy(() => import('../helloWorld/index'))
const TestWorld = lazy(() => import('../testWorld/index'))


class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={HelloWorld} />
            <Route exact path="/test" component={TestWorld} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    )
  }
}
export default Router