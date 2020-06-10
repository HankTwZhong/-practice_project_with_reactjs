import React from 'react';


class FlavorForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {value: 'cocount'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert('Your favorite flavor is:' + this.state.value);
        event.preventDefault();
    }

    render(){
        return (
            <fieldset>
                <legend>Here is floavorform</legend>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Pick your favorite flavor:
                        <select>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option selected value="cocount">Cocount</option>
                            <option value="Mango">Mango</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </fieldset>
        );
    }
}

export {FlavorForm};
