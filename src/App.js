import React from 'react'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      txt: 'this is the initial txt key property value in state.'
    }
  }
  update (event) {
    this.setState({
      txt: event.target.value
    })
  }
  render () {
    return (
      <div>
        <input
          type='text'
          onChange={this.update.bind(this)}
        />
        <h1>{this.state.txt}</h1>
      </div>
    )
  }
}

export default App

// Class Component ( w/ JSX )
// class App extends React.Component {
//   render () {
//     return <h1>Hello World!</h1>
//   }
// }

// Class Component ( sans-JSX )
// class App extends React.Component {
//   render () {
//     return React.createElement('h1', null, 'Hello World!')
//   }
// }

// Stateless functional component
// const App = () => <h1>Hello World!</h1>

/* A react components render method can only return a single node.

  class App extends React.Component {
    render () {
      return <h1>Hello Earth!</h1> <h1>Hello Mars!</h1>
    }
  }

   For example, the class component above will return an error message like:

     Syntax error: Adjacent JSX elements must be wrapped in an enclosing tag

  Why can the render method only contain a single node?
  Consider the following class component.  It should render the same output as the example above,
  but it does not use JSX.

  class App extends React.Component {
    render () {
      return React.createElement('h1', null, 'Hello Earth!') React.createElement('h1', null, 'Hello Mars!')
    }
  }

  Javascript's return statement only returns one value.
  JSX makes it difficult to see that render is returning more than one value if
  all elements are not wrapped inside of one element.
*/
