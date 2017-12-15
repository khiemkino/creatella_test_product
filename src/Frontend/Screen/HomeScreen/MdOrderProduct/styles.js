import { StyleSheet } from 'react-native'
import {width, height} from '@/globalStyles'

const styles = StyleSheet.create({
  headerStyle: {
    height: height(8),
    width: width(100),
    backgroundColor: '#f8898c',
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtTitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: width(5),
    fontWeight: 'bold'
  },
  productList: {
    height: height(50),
    width: width(100)
  },
  productContainer: {
    margin: width(1),
    width: width(44),
    borderWidth: 1,
    borderRadius: 7,
    height: height(10),
    marginHorizontal: width(3)
  },
  flexRow: {
    flexDirection: 'row'
  },
  itemContainer: {
    width: width(15),
    backgroundColor: '#56f19b',
    margin: width(1.5)
  },
  txtContainer: {
    width: width(15),
    fontSize: width(3),
    margin: width(1)
  }
})
export default styles
