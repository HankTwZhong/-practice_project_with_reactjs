import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date(), count: 0};
    }
  
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
        this.counterID = setInterval(
            () => this.counter(),
            1000
        )
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
        clearInterval(this.counterID)
    }
  
    tick() {
        this.setState({
            date: new Date()
        });
    }

    counter(){
        this.setState((state, props) =>({
            count:state.count + 1
        }))
    }
  
    render(){
        return(
          <fieldset>
              <legend>Here is timer</legend>
              <h2>It is {this.state.date.toLocaleTimeString()} </h2>
              <h2>Number is {this.state.count}</h2>
          </fieldset>
        );
    }
}

export {Clock};