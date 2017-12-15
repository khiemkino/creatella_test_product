import { StyleSheet } from 'react-native'
import {width, height} from '@/globalStyles'

const styles = StyleSheet.create({
  spkCreate: {
    color: '#645c5d',
    alignSelf: 'center'
  },
  rowContainer: {
    height: height(10),
    width: width(90),
    paddingHorizontal: width(5),
    paddingVertical: height(0.2),
    flexDirection: 'row',
    alignItems: 'center'
  },
  rowLeft: {
    width: width(40),
    alignItems: 'flex-start'
  },
  rowRight: {
    width: width(41),
    alignItems: 'flex-end'
  },
  rightIconStyle: {
    height: height(4),
    width: height(4),
    resizeMode: 'cover'
  },
  itemContainer: {
    marginTop: height(2),
    alignItems: 'center',
    width: width(50),
    height: height(35)
  },
  productContainer: {
    height: width(40),
    width: width(40),
    borderRadius: width(20),
    borderWidth: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  productSoldContainer: {
    height: width(40),
    width: width(40),
    borderRadius: width(20),
    borderWidth: 1,
    backgroundColor: '#f15656',
    alignItems: 'center',
    justifyContent: 'center'
  },
  priceTagContainer: {
    marginTop: height(2),
    flexDirection: 'row',
    alignItems: 'center'
  },
  buyContainer: {
    marginTop: height(2),
    alignItems: 'center',
    justifyContent: 'center',
    height: height(6),
    width: width(30),
    borderRadius: 7,
    backgroundColor: '#6a9e3f'
  },
  priceLeftContainer: {
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    borderColor: '#929b96',
    borderWidth: width(0.5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff4e58',
    height: height(6),
    width: width(15)
  },
  priceRightContainer: {
    flexDirection: 'row',
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderColor: '#929b96',
    borderWidth: width(0.5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff4e58',
    height: height(6),
    width: width(15)
  },
  dateTimeContainer: {
    justifyContent: 'center',
    height: height(5.5),
    width: width(6)
  },
  dateContainer: {
    justifyContent: 'center',
    height: height(2.75),
    alignItems: 'center',
    borderBottomWidth: width(0.5),
    borderBottomColor: '#929b96'
  },
  monthContainer: {
    justifyContent: 'center',
    height: height(2.75),
    alignItems: 'center'
  },
  yearContainer: {
    alignItems: 'flex-end',
    height: height(3),
    width: width(7.5)
  },
  txtSmall: {
    fontSize: width(3)
  },
  txtDayAgo: {
    fontSize: width(3),
    textAlign: 'center'
  },
  bgColor: {
    backgroundColor: '#fbced5'
  },
  priceColor: {
    color: '#f1fdf9'
  },
  txtBuy: {
    fontSize: width(5),
    color: '#f1fdf9'
  },
  txtSold: {
    marginTop: height(2),
    fontSize: width(5),
    color: '#f1fdf9'
  },
  txtNoItem: {
    fontSize: width(7)
  },
  imgAdvertisement: {
    height: height(10),
    width: width(100)
  },
  viewContainerAds: {
    height: height(77),
    width: width(100),
    marginBottom: height(0.5)
  },
  viewContainer: {
    height: height(90),
    width: width(100),
    marginBottom: height(0.5)
  },
  viewContainerNoItem: {
    height: height(77),
    width: width(100),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: height(0.5)
  },
  modalFormStyle: {
    height: height(60),
    width: width(90),
    backgroundColor: 'transparent',
    alignItems: 'center'
  },
  dropdownButtonContainer: {
    top: height(2),
    width: width(20),
    justifyContent: 'center'
  },
  dropdownStyle: {
    width: width(15),
    height: height(15),
    borderRadius: width(1),
    marginTop: height(1)
  },
  dropdownButton: {
    width: width(15),
    height: height(5),
    borderRadius: width(1),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  dropdownButtonText: {
    fontSize: width(4)
  },
  dropdownItem: {
    height: height(5),
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default styles
