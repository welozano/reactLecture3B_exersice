import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  Alert,
  TouchableHighlight,
} from 'react-native';

// 3.2 Make your todos clickable such that they call the
// delete function in parent when pressed

export default function ToDo(props) {
  return (
    <TouchableHighlight onPress={props.method}>
        <View style={styles.container}>
        <Text>{props.text}</Text>
        </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 75,
    width: '100%',
    backgroundColor: 'lightblue',
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
