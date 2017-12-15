import { width, height } from '@/globalStyles'
import { Platform, StyleSheet } from 'react-native'

const ISIOS = Platform.OS === 'ios'
const heightNavBar = height(ISIOS ? 11.5 : 8.5)
const topNavBarIOS = height(ISIOS ? 3 : 0)

const styles = StyleSheet.create({
  container: {
    height: heightNavBar + height(1),
    width: width(100),
    backgroundColor: '#f8898c'
  },
  coreStyle: {
    paddingTop: topNavBarIOS,
    height: heightNavBar,
    width: width(90),
    flexDirection: 'row',
    marginHorizontal: width(5)
  },
  txtTitleContainer: {
    width: width(50),
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtTitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: width(5),
    fontWeight: 'bold'
  },
  iconHeaderLeft: {
    width: width(20),
    justifyContent: 'center'
  },
  iconHeaderRight: {
    width: width(20),
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  dropdownButtonContainer: {
    width: width(20),
    justifyContent: 'center'
  }

})
export default styles
