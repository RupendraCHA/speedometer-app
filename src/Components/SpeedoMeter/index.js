import {Component} from 'react'
import "./index.css"

class SpeedoMeter extends Component{
    state = {count: 0}

    increaseSpeed = () => {
        const {count} = this.state 
        if (count < 200){
            this.setState((prevState) => 
            ({count: prevState.count + 10})
        )
        }
        
    }

    decreaseSpeed = () => {
        const {count} = this.state 
        if (count > 0){
            this.setState((prevState) => 
        ({count: prevState.count - 10})
        )
        }
        
    }

    render(){
        let {count} = this.state
        return (
            <div className="speedometer-container">
                <h1 className="heading">
                    SPEEDOMETER
                </h1>
                <div>
                    <img className="speed-image" src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
                        alt="speedometer"/>
                </div>
                <h3 className="speed-indicator">
                    Speed is {count}mph
                </h3>
                <p className="speed-range-text">
                    Min Limit is 0mph,Max Limit is 200mph
                </p>
                <div>
                    <button className="accelerate-button" type="button" onClick={this.increaseSpeed}>Accelerate</button>
                    <button className="brake-button" type="button" onClick={this.decreaseSpeed}>Apply Brake</button>
                </div>
            </div>
        )
    }
}

export default SpeedoMeter 