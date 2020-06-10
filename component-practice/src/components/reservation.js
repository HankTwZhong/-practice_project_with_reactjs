import React from 'react';

class Reservation extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            isGoing: true,
            numberofGuests :2
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.name === 'isGoing' ? target.checked: target.value;
        const name = target.name;

        this.setState ({
            [name] : value
        })
    }

    render(){
        return(
        <fieldset>
            <legend>Here is reservation</legend>
            <form>
                <label>
                    Is going:
                    <input 
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange}/>
                </label>
                <br />
                <label>
                    Numbers of guests:
                    <input 
                        name="numberofGuests"
                        type="number"
                        value={this.state.numberofGuests}
                        onChange={this.handleInputChange}/>

                </label>
            </form>
        </fieldset>
        )
    }
};

export {Reservation};