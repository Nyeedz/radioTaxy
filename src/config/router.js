import { Navigation } from 'react-native-navigation'
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'

const registerScreens = () => {
	Navigation.registerComponent('login', () => LoginScreen)
	Navigation.registerComponent('home', () => HomeScreen)
}

export default registerScreens
