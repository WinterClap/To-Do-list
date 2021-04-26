import React, {Component} from "react"
import styled from "styled-components"
import { Header, CreateTaskBody } from "../../AppContainer"

const CreateTaskContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    min-width: 300px;
    max-width: 320px;
    transition: all 240ms ease-in-out;
    max-height: 290px;
    min-height: 250px;
    margin: 20px;
    background-color: rgba(77, 25, 77, 0.6);
    border-radius: 10px 10px 35px 35px;
    line-height: 40px; 
      &:hover {
        background-color: rgba(77, 25, 77, 0.7);
      }
`
const Select = styled.select`
    font-family: "Poppins";
    font-size: 12px;
    border-radius: 15px;
    margin-left: 60px;
    margin-right: 40px;
    padding: 5px;
    text-align: center;
    
`
const Input = styled.input`
    padding-left:12px;
    height: 30px;
    outline: none;
    border: rgba(15,15,15, 0.28);
    font-family: "Poppins";
    border-radius: 15px;
    &::placeholder {
        text-align: center;
    }
`
export const Button = styled.button`
    width: 40%;
    font-size: 16px;
    font-family: "Poppins";
    justify-self: flex-end;
    cursor: pointer;
    margin: 10px auto;
    border-radius: 20px;
    text-align: center;
    border: none;
    outline: none;
    padding: 0 15px;
    transition: all 140ms ease-in-out;
    &:hover {
        transform: scale(1.14);
        background-color: #7a0050;
        color: #fff;
    }
`


export class ToDoForm extends Component {

    constructor() {
        super();
        this.state = {
            title: "",
            responsible: "",
            description: "",
            priority: "low"
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInput(e){
        const { value, name } = e.target
        this.setState({
            [name]: value
        })
    }
    
    handleSubmit (e){
        e.preventDefault()
        this.props.onAddTodo(this.state)
        console.log(this.state)
    }
    render() {
        return (
            <CreateTaskContainer>
                <Header>Create a new task </Header>
                <form onSubmit ={this.handleSubmit}>
                    <CreateTaskBody>
                        Name <Input type = "text" placeholder = "Task Name" name= "title" onChange = {this.handleInput}/>
                        Responsible <Input type = "text" placeholder = "Responsible" name = "responsible" onChange = {this.handleInput}/>
                        Description <Input type = "text" placeholder = "Description" name = "description" onChange = {this.handleInput}/>
                        Priority <Select name = "priority" onChange = {this.handleInput}> 
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </Select>
                        <Button type = "submit">Add</Button>
                    </CreateTaskBody>
                </form>
                
            </CreateTaskContainer>
        );
    }
}