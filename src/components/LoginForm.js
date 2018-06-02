import React, { Component } from 'react';
import {
  Button,
  Text,
  Input,
  Item,
  Icon,
  Content,
  Toast
} from 'native-base';
import * as axios from 'axios';
import { View } from 'react-native'
import { url } from '../utilities/constants'

export default class LoginForm extends Component {

  state = {
    username: '',
    password: '',
    loading: false
  }

  _login = () => {
    this.setState({ loading: true })
    axios.post(`${url}/auth/local`, {
      identifier: this.state.username,
      password: this.state.password
    })
      .then(res => {
        this.props.navigation.push({
          screen: 'home',
          passProps: res.data
        })
      })
      .catch(error => {
        console.tron.log(error)
      })
  }

  render() {
    const styles = {
      iconColor: {
        color: "#BDBDBD"
      },
      checkboxStyle: {
        color: "#BDBDBD",
        fontSize: 12
      },
      buttonStyle: {
        marginTop: 20
      },
      divisor: {
        color: "#BDBDBD",
        textAlign: "center",
        marginTop: 20
      },
      top: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      },
    }

    return (
      <Content>
        <Item>
          <Icon name="people" style={styles.iconColor} />
          <Input
            placeholder="Username"
            placeholderTextColor="#BDBDBD"
            onChangeText={(value) => this.setState({ username: value })}
            value={this.state.username}
          />
        </Item>
        <Item style={styles.inputStyle}>
          <Icon name="unlock" style={styles.iconColor} />
          <Input
            placeholder="Senha"
            placeholderTextColor="#BDBDBD"
            secureTextEntry={!false}
            onChangeText={(value) => this.setState({ password: value })}
            value={this.state.password}
          />
        </Item>
        <View>
          <Button
            rounded
            block
            info
            style={styles.buttonStyle}
            onPress={this._login}
          >
            <Text>Entrar</Text>
          </Button>
        </View>
        <View>
          <Text style={styles.divisor}> ───────────── ou ───────────── </Text>
        </View>
        {/* <View>
            <SocialIcon
              title="Entrar com o Facebook"
              style={styles.buttonStyle}
              button
              type="facebook"
            />
          </View> */}
        <View style={styles.top}>
          <Button
            rounded
            success
          >
            <Text>Cadastre-se</Text>
          </Button>
        </View>
      </Content>
    )
  }
};
