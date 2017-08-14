import React from 'react'

class JsxToJs extends React.Component {
  constructor () {
    super()
    this.state = {
      input: 'JSX goes here...',
      output: '',
      err: ''
    }
  }
  update (event) {
    var code = event.target.value
    try {
      this.setState({
        output: window.Babel.transform(code, { presets: ['es2015', 'react'] }).code,
        err: ''
      })
    } catch (error) {
      this.setState({
        err: error.message
      })
    }
  }
  render () {
    return (
      <div>
        <h3>{this.state.err}</h3>
        <div className='container'>
          <textarea
            onChange={this.update.bind(this)}
            defaultValue={this.state.input}
          />
          <pre>
            {this.state.output}
          </pre>
        </div>
      </div>
    )
  }
}

export default JsxToJs
