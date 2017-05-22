import React, { Component } from 'react';
import {
  TouchableHighlight,
  TextInput,
	Image,
	StyleSheet,
	Text,
	View } from 'react-native';

class Login extends Component {
  render() {
    return (
    	<View style={styles.container}>
    		<Image style={styles.logo}
        source={require('./src/img/octocat.png')}
			/>
			<Text style={styles.heading}>
				Github browser
			</Text>

      <TextInput style={styles.input}
        placeholder = "Github username" />
      <TextInput style={styles.input}
        placeholder = "Github password"
        secureTextEntry />

      <TouchableHighlight 
        style={styles.button}>
        <Text style={styles.buttonText}>
          Log in
        </Text>
      </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     paddingTop: 40,
     backgroundColor: '#F5FCFF',
     padding: 10
     // justifyContent: 'center',
  },
  logo: {
  	width: 66,
  	height: 55
  },
  heading: {
  	fontSize: 30,
  	marginTop: 10
  },
  input: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec'

  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    textAlign: 'center'
    // alignSelf: 'canter'
  }
}); 


// var Login = React.createClass({
// 	render: function(){
// 		return (
// 			<Text>Hello</Text>
// 		);
// 	};
// });

module.exports = Login;


