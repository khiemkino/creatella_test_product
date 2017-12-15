import { AppRegistry, Platform, Text } from 'react-native'
import { setCustomText } from 'react-native-global-props'
import ProductGrid from './src'
import { txtDefault } from '@/globalStyles'

global.ISIOS = Platform.OS === 'ios'
Text.defaultProps.allowFontScaling = false
setCustomText({style: txtDefault})

AppRegistry.registerComponent('creatella_productsGrid', () => ProductGrid)
