import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  accelerate = () => {
    this.setState(prevState => ({
      count: prevState.count === 200 ? 200 : prevState.count + 10,
    }))
  }

  breaking = () => {
    this.setState(prevState => ({
      count: prevState.count === 0 ? 0 : prevState.count - 10,
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />

        <h1 className="heading">
          Speed is <span>{count}</span>mph
        </h1>
        <p className="heading">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="Accelerate-btn" onClick={this.accelerate}>
            Accelerate
          </button>
          <button className="breaks-btn" onClick={this.breaking}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
