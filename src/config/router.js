import { Navigation } from 'react-native-navigation'
import LoginScreen from '../screens/LoginScreen'

const registerScreens = () => {
	Navigation.registerComponent('login', () => LoginScreen)
}

export default registerScreens
