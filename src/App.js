import React from 'react'

// class App extends React.Component {
//   render () {
//     return <h1>Hello World!</h1>
//   }
// }

class App extends React.Component {
  render () {
    return React.createElement('h1', null, 'Hello World!')
  }
}

export default App
