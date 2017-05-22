import React, { Component } from 'react';
import {
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
     // justifyContent: 'center',
  },
  logo: {
  	width: 66,
  	height: 55
  },
  heading: {
  	fontSize: 30,
  	marginTop: 10
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


