import React from 'react';
import './JsxToJs.css';

class JsxToJs extends React.Component {
  constructor() {
    super();
    this.state = {
      input: 'const App = () => <h1>Hello World!</h1>',
      output: '',
      err: ''
    };
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.update({ target: { value: this.state.input } });
  }

  update(event) {
    var code = event.target.value;
    try {
      this.setState({
        output: window.Babel.transform(code, { presets: ['es2015', 'react'] }).code,
        err: '',
        input: ''
      });
    } catch (error) {
      this.setState({
        err: error.message
      });
    }
  }
  render() {
    return (
      <div>
        <header className="errors">{this.state.err}</header>
        <div className="container">
          <textarea
            onChange={this.update}
            defaultValue={this.state.input}
            placeholder="JSX goes here..."
          />
          <pre>{this.state.output}</pre>
        </div>
      </div>
    );
  }
}

export default JsxToJs;
