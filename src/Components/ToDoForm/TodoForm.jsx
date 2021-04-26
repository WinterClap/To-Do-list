import React, {Component} from "react"
import styled from "styled-components"
import { Header, CreateTaskBody } from "../../AppContainer"

const CreateTaskContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    width: 300px;
    transition: all 240ms ease-in-out;
    height: 250px;
    margin: 20px;
    background-color: rgba(77, 25, 77, 0.6);
    border-radius: 10px 10px 35px 35px;

      &:hover {
        background-color: rgba(77, 25, 77, 0.7);
      }
`
const Input = styled.input`
    outline: none;
    border: rgba(15,15,15, 0.28);
    font-family: "Poppins";
    border-radius: 15px;
    padding-left: 8px;
    &::placeholder {
        text-align: center;
    }

`

export class ToDoForm extends Component {
    constructor() {
        super()
        this.state = {
            
        }
    }

    render() {
        return (
            <CreateTaskContainer>
                <Header>Create a new task </Header>
                    <CreateTaskBody>
                        Name <Input type = "text" placeholder = "Task Name" name= "taskName"/>
                        Responsible <Input type = "text" placeholder = "Responsible" name = "taskResponsible"/>
                        Priority 
                        <button type = "submit"> </button>
                    </CreateTaskBody>
                
            </CreateTaskContainer>
        );
    }
}