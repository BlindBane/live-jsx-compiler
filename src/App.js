import React from 'react'

class App extends React.Component {
  render () {
    return <h1>Hello World!</h1>
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
