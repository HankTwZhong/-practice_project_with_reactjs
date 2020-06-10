import React from 'react'
import './splitpane.css'

function Contacts(){
    return(
        <div className='Contacts'>
            Contacts
        </div>
    )
}

function Chat(){
    return (
        <div className='Chat'>
            Chat
        </div>
    )
}

function Splitpane(props){
    return(
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>

        </div>
    )
}

class SplitPaneControl extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <fieldset>
                <legend>----------Here is splitpane-----------</legend>
                    <Splitpane 
                        left={<Contacts />}
                        right={<Chat />}
                    />
            </fieldset>
        )
    }
}

export {SplitPaneControl}