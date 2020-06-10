import React from 'react';

class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState((state) => ({
            isToggleOn: !state.isToggleOn
        }))
    }
    render(){
        return(
            <fieldset>
                <legend>Here is toggle</legend>
                <button onClick= {this.handleClick}>
                    {this.state.isToggleOn? 'ON' : 'OFF'}
                </button>
            </fieldset>
        );
    }

}
export {Toggle};