import { Dimensions, StyleSheet } from 'react-native'

const MYWIDTH = Dimensions.get('window').width
const MYHEIGHT = Dimensions.get('window').height

export const width = num => MYWIDTH * (num / 100)
export const height = num => MYHEIGHT * (num / 100)

export const APPFONT = {
  FUTURA: 'Futura'
}

export const APPCOLOR = {
  DEFAULT: 'white'
}

export const txtDefault = {
  color: 'black',
  fontSize: width(4),
  backgroundColor: 'transparent',
  fontFamily: APPFONT.FUTURA
}

const styles = StyleSheet.create({
  backgroundDefault: {
    flex: 1,
    backgroundColor: APPCOLOR.DEFAULT
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
    width: width(100)
  }
})

export default styles
