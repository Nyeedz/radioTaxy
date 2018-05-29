import { AppRegistry } from 'react-native'
import { Navigation } from 'react-native-navigation'
import registerScreens from './src/config/router'

registerScreens()
Navigation.startSingleScreenApp({
	screen: {
		screen: 'login',
	},
})
