import { View, ScrollView, Text, Button, StyleSheet } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  appContainer: {
    justifyContent: 'center',
    textAlign: 'center',
    padding: 10,
    marginTop: 20,
    flex: 1,
  },
  countStyle: {
    fontSize: 50,
  },
});

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  

  componentDidMount(props) {
    this.interval=setInterval(this.inc, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  inc = () => {
    console.log("increase")
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <View style={styles.appContainer}>
        <Text count={this.state.count} style={styles.countStyle}>
          {this.state.count}
        </Text>
      </View>
    );
  }
}

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      showCounter:true,
    }
  }

  toggleCounter=()=>{
    this.setState({
      showCounter:!this.state.showCounter
    })
  }
  render(){
    if(this.state.showCounter){
      return(
        <View style={styles.appContainer}>
          <Button title="Toggle" onPress={this.toggleCounter} />
          <Counter />
        </View>
      )
    }else {
      return(
        <View style={styles.appContainer}>
        <Button title="Toggle" onPress={this.toggleCounter} />
        </View>
      )
    }
  }
}
