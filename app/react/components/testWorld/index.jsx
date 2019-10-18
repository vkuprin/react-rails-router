import React from 'react'
import { Link } from 'react-router-dom';

class TestWorld extends React.Component {
  render() {
    return (
      <div>
        <h2 className="test-world">Test world!</h2>
          <br/>
        <Link to="/">Hello World</Link>
      </div>
    )
  }
}
export default TestWorld