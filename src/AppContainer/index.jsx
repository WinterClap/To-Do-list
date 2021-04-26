import { render } from "@testing-library/react";
import React, { useState, Component } from "react";
import styled from "styled-components";
import { ToDoForm } from "../Components/ToDoForm/TodoForm";
import { todos } from "../todos.json";

const Container = styled.div`
  background-color: #11001c;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;
const NavBar = styled.div`
  background-color: #290025;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 20px 40px;
  width: 100%;
  color: #fff;
  font-size: 18px;
  border-radius: 0 0px 50px 50px;
`;
const TitleDiv = styled.div`
  background-color: #3a015c;
  border-radius: 20px;
  padding: 10px;
  font-weight: 600;
`;

const AddButton = styled.button`
  color: #fff;
  font-size: 18px;
  font-family: "Poppins";
  cursor: pointer;
  outline: none;
  border: none;
  background-color: #3a015c;
  border-radius: 20px;
  padding: 10px;
  transition: all 240ms ease-in-out;
  font-weight: 600;

  &:hover {
    transform: scale(1.1);
    filter: brightness (1.03);
  }
`;

const SubContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  border: 1px solid white;
`;

const TasksBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: relative;
  border: 3px solid white;
`;

const TaskContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  width: 250px;
  transition: all 240ms ease-in-out;
  height: 250px;
  margin: 20px;
  background-color: rgba(77, 25, 77, 0.6);
  border-radius: 10px 10px 35px 35px;

  &:hover {
    background-color: rgba(77, 25, 77, 0.7);
  }
`;

export const Header = styled.div`
  text-align: center;
  padding: 10px;
  font-size: 17px;
  font-weight: 800;
  color: #fff;
  border-radius: 10px 10px 10px 10px;
  background-color: #4f0147;
`;
const TaskBody = styled.div`
  margin: 10px;
  color: #fff;
  font-size: 13px;
`;
export const CreateTaskBody = styled.div`
  margin: 10px;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid white;
  
`
const Priority = styled.div`
    border: 2px solid white;
    position: relative;
    width: fit-content;
    margin: auto;
    border-radius: 20px;
    padding: 7px;
    font-size: 12px;
    color: #fff;
    background-color: #3d0000;
`
export class AppContainer extends Component {
  constructor() {
    super();
    this.state = {
      todos
    };
  }
  render() {
    const to_dos = this.state.todos.map((todo, i) => {
      return (
          <TaskContainer>
            <Header> {todo.title} 
                <Priority> {todo.priority} </Priority>
            </Header>
           
            <TaskBody> {todo.description} </TaskBody>
          </TaskContainer>
        
      );
    });
    return (
      <Container>
        <NavBar>
          <TitleDiv> Tasks {this.state.todos.length} </TitleDiv>
          <AddButton>Add task</AddButton>
        </NavBar>
        <SubContainer>
        <ToDoForm></ToDoForm>
          <TasksBox>
              { to_dos }
          </TasksBox>
        </SubContainer>
      </Container>
    );
  }
}
/*
export function AppContainer(props) {

    let todosJ = useState (todos)

  return (
    <Container>
      <NavBar>
        <TitleDiv> Tasks  { todosJ[0].length } </TitleDiv>
        <AddButton>Add task</AddButton>
      </NavBar>


      <TasksBox>
      
      {todosJ[0].map( (todo, i) =>{ 
        {console.log(todo.title)}
        <TaskContainer>
            <Header> {todo.title} </Header>
                <TaskBody> asdasd </TaskBody>
        </TaskContainer>
      } ) } 
      
      </TasksBox>
      
    </Container>
  );
}*/
