import React from 'react'
import { thisExpression } from '@babel/types';

const studentList = [
    {name: 'Arthur', score: '95', class: 'First class'},
    {name: 'Lancelot', score: '90', class: 'First class'},
    {name: 'Mordred', score: '60', class: 'Second class'},
    {name: 'Gawain', score: '85', class: 'Second class'}
]

class SearchBar extends React.Component{

    constructor(props){
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    }

    handleFilterTextChange(e){
        this.props.onFilterTextChange(e.target.value)
    }

    render(){
        return(
            <input 
                    placeholder="Search student name..."
                    value={this.props.filterText}
                    onChange={this.handleFilterTextChange}
                    />
        )
    }
}


class StudentClassRow extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <tr>
                <th colSpan="2">
                    {this.props.name}
                </th>
            </tr>
        )
    }
}

class StudentRow extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <tr>
                <td>
                    {this.props.name}
                </td>
                <td>
                    {this.props.score}
                </td>
            </tr>
        )
    }
}

class StudentTable extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const students = this.props.students
        const rows = []
        const filterText = this.props.filterText
        let lastClassName = ''
        students.forEach((student) =>{
            if(student.name.indexOf(filterText) === -1){
                return ;
            }
            if(student.class !== lastClassName){
                rows.push(<StudentClassRow name={student.class}/>)
                lastClassName = student.class
            }
            rows.push(<StudentRow name={student.name} score={student.score}/>)
        })

        return(
            <table>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Score
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}


class FilterScoreTable  extends React.Component{
    constructor(props){
        super(props);
        this.state={
            filterText: ''
        }
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }
    
    handleFilterTextChange(filterText){
        this.setState({
            filterText: filterText
        })
    }

    render(){
        return(
            <form>
                <SearchBar 
                                filterText={this.state.filterText}
                                onFilterTextChange={this.handleFilterTextChange}/>
                <StudentTable 
                                students={studentList}
                                filterText={this.state.filterText}/>
            </form>
        )
    }

}

export {FilterScoreTable};