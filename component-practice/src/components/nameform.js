import React from 'react';

class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: 'Input some word in here.'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert('A name was submitted: ' + this.state.value)
        event.preventDefault();
    }

    render(){
        return (
            <fieldset>
                <legend>This is nameform</legend>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <textarea type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </fieldset>
        )
    }
}

export {NameForm}