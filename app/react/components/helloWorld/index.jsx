import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom';

class HelloWorld extends React.Component {
  render() {
    return (
        <div>
            <span className="hello-world">Hello world!</span>
            <br/>
            <Link to="/test">Test World</Link>
        </div>
    )
  }
}
export default HelloWorld