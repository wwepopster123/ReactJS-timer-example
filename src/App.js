import React from 'react';
import './App.css';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0, run: true };
    this.handleReset = this.handleReset.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleContinue = this.handleContinue.bind(this);
  }

  handleReset(e) {
    this.setState(state => ({
      seconds: 0
    }))
  }

  handleStop(e) {
    if (this.state.run) {
      this.clearInterval();
    }
  }

  handleContinue(e) {
    if (!this.state.run) {
      this.startInterval();
    }
  }

  startInterval() {
    this.interval = setInterval(() => {this.tick()}, 1000);
    this.setState(state => ({
      run: true
    }));
  }

  clearInterval() {
    clearInterval(this.interval);
    this.setState(state => ({
      run: false
    }));
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }))
  }

  componentDidMount() {
    this.startInterval();
  }

  componentWillUnmount() {
    this.clearInterval();
  }

  render() {
    return (
      <div>
        <div>Секунд: {this.state.seconds}</div>
        <button
          onClick={this.handleReset}
        >
          Reset timer
        </button>
        <button
          onClick={this.handleStop}
        >
          Stop
        </button>
        <button
          onClick={this.handleContinue}
        >
          Continue
        </button>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Timer />
        <Timer />
      </header>
    </div>
  );
}

export default App;
