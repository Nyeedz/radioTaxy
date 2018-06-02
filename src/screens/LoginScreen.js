import React, { Component } from 'react';
import { View, Image } from 'react-native';
import {
  Container
} from 'native-base';

import LoginForm from '../components/LoginForm'

export default class LoginScreen extends Component {

  static navigatorStyle = {
    navBarHidden: true,
  }

  render() {

    const styles = {
      container: {
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center"
      },
      imageStyle: {
        width: 250,
        height: 200,
        marginRight: 35,
        marginLeft: 'auto',
        resizeMode: "contain"
      }
    };

    return (
      <Container style={styles.container}>
        <View style={styles.viewStyle}>
          <Image
            style={styles.imageStyle}
            source={require('../img/logotaxi.png')}
          />
          <LoginForm />
        </View>
      </Container>
    );
  }
}
