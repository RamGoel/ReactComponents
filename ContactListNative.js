import React from 'react';
import { Text, ScrollView, Button, View, StyleSheet } from 'react-native';


 const nameArray=[{
   
     name:"Shubham",
     phone:12020020022,
     key:324
   },
   {
     name:"Ankit",
     phone:38483293893,
     key:456
   },
   {
     name:"Divesh",
     phone:38483293893,
     key:898
   },
   {
     name:"Bhaskar",
     phone:38483293893,
     key:373
   },
   {
     name:"Sagar",
     phone:38483293893,
     key:723
   },
   {
     name:"Naman",
     phone:38483293893,
     key:237
   }
 ]



const styles = StyleSheet.create({
  contactBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'lightblue',
    margin: 2,
    alignItems: 'center',
  },
  head: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 600,
  },
});

const ContactBox = (props) => (
  <View style={styles.contactBox}>
    <Button title="Delete" onPress={props.deleteItem} />
    <Text>{props.name}</Text>
    <Text>{props.phone}</Text>
  </View>
);
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items:nameArray,
    };
  }

  deleteItemFn = id => {
    this.setState({
      items: this.state.items.filter((items) => items.key !== id),
    });
  };
  render() {
    return (
      <View>
        <Text style={styles.head}>Contact List</Text>
        <ScrollView>
          {this.state.items.map((item) => (
            <ContactBox
              name={item.name}
              deleteItem={()=>this.deleteItemFn(item.key)}
              phone={item.phone}
              id={item.key}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
