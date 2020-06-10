import React from 'react'

function toCelsius(fahrenheit){
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenhiet(celsius){
    return (celsius * 9 / 5 + 32)
}

function tryConvert(temperature, convert){
    const input = parseFloat(temperature)
    if (Number.isNaN(input)){
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000 / 1000);
    return rounded.toString();
}


function BoilingVerdict(props){
    let element = null;
    if(props.celsius >= 100){
        element = <p>The water would boil.</p>
    }
    else{
        element = <p>The water would not boil.</p>
    }
    return element;
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

class TemperatureInput extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.props.onTemperatureChange(event.target.value);
    }
    render(){
        const temperature = this.props.temperature
        const scale = this.props.scale;
        return(
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}</legend>
                <input value={temperature}
                        onChange={this.handleChange}/>
            </fieldset>
        )
    }
}


class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
    }

   handleCelsiusChange(numberOfTemperature){
       this.setState({scale:'c', temperature:numberOfTemperature})
    }

    handleFahrenheitChange(numberOfTemperature){
        this.setState({scale:'f', temperature:numberOfTemperature})
    }

    render(){
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius): temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenhiet) : temperature;
        return(
            <div>
                <TemperatureInput 
                    scale='c'
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}/>
                <TemperatureInput
                    scale='f'
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}/>
                <BoilingVerdict
                    celsius={parseFloat(celsius)}/>
            </div>
        )
    }
}
export {Calculator};