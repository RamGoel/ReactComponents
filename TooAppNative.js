import {View, ScrollView, Button, Text,StyleSheet} from "react-native";
import React from 'react'

const styles= StyleSheet.create({
  appContainer:{
    marginTop:30,
    padding:20
    },
    taskContainer:{
      flexDirection:"row",
      alignItems:"center",
      margin:10
      },
    textStyle:{
      fontSize:30,
      textAlign:"center"
    },
})

let id = 0;
const Todo = (props) => (
  <View style={styles.taskContainer}>
    <Button onPress={props.onDelete} title="Delete" />
    <Text> {props.todo.text}</Text>
  </View>
);




export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
    };
  }

  deleteTodo = (id) => {
    this.setState({
      todo: this.state.todo.filter((todo) => todo.id !== id),
    });
    id=id-1;
  };

  addTodo = () => {
    id=id+1;
    const task = `Task No. ${id}`;
    this.setState({
      todo: [...this.state.todo, { text: task, id: id}],
    });
  };

  render() {
    return (
      <View style={styles.appContainer}>
 
        <Text style={styles.textStyle}>Todo List</Text>
        <Text style={styles.textStyle}>Task Count :{this.state.todo.length}</Text>
        <Button onPress={() => this.addTodo()} title="Add Task" />
        <ScrollView>
          {this.state.todo.map((todo) => (
            <Todo onDelete={() => this.deleteTodo(todo.id)} todo={todo} />
          ))}
        </ScrollView>
      </View>
    );
  }
}




