import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class MasterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      player:  '',
      card: '',
      minute: '', 
    }
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }
   
  handleSubmit = event => {
    event.preventDefault()
    const { player, card, minute } = this.state
    alert(`Card details: \n 
           Player: ${player} \n 
           Card: ${card} \n
           Minute: ${minute}`)
  }
  
  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 2? 3: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }
    
  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

previousButton() {
  let currentStep = this.state.currentStep;
  if(currentStep !==1){
    return (
      <button 
        className="btn btn-secondary" 
        type="button" onClick={this._prev}>
      Previous
      </button>
    )
  }
  return null;
}

nextButton(){
  let currentStep = this.state.currentStep;
  if(currentStep <3){
    return (
      <button 
        className="btn btn-primary float-right" 
        type="button" onClick={this._next}>
      Next
      </button>        
    )
  }
  return null;
}
  
  render() {    
    return (
      <React.Fragment>
      <h1>Player bookings 🟨🟥</h1>
      <p>Step {this.state.currentStep} </p> 

      <form onSubmit={this.handleSubmit}>{}
        <Step1 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          player={this.state.player}
        />
        <Step2 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          card={this.state.card}
        />
        <Step3 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          minute={this.state.minute}
        />
        {this.previousButton()}
        {this.nextButton()}

      </form>
      </React.Fragment>
    );
  }
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  } 
  return(
    <div className="form-group">
      <label htmlFor="player">Name of the player</label>
      <input
        className="form-control"
        id="player"
        name="player"
        type="text"
        placeholder="Enter name"
        value={props.player}
        onChange={props.handleChange}
        />
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(
    <div className="form-group">
      <label htmlFor="card">Card</label>
      <input
        className="form-control"
        id="card"
        name="card"
        type="text"
        placeholder="Yellow or red card?"
        value={props.card}
        onChange={props.handleChange}
        />
    </div>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  } 
  return(
    <React.Fragment>
    <div className="form-group">
      <label htmlFor="minute">Booking time</label>
      <input
        className="form-control"
        id="minute"
        name="minute"
        type="number"
        placeholder="Enter time of the booking"
        value={props.minute}
        onChange={props.handleChange}
        />      
    </div>
    <button className="btn btn-success btn-block">Show Card</button>
    </React.Fragment>
  );
}

ReactDOM.render(<MasterForm />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
