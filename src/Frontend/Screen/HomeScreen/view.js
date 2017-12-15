import React, { PureComponent } from 'react'
import { View, Text, FlatList, TouchableHighlight } from 'react-native'

// Other Components
import styles from './styles'
import gStyles, { height } from '@/globalStyles'
import { formatCentToDolar } from '@/globalFunction'
import CoreLayoutContainer from '~/Container/CoreLayoutContainer'
import * as Animatable from 'react-native-animatable'
import moment from 'moment'
import FastImage from 'react-native-fast-image'
import SpinnerKit from 'react-native-spinkit'
import EmojiStore from '#/API/EmojiStore'
import Modal from 'react-native-modalbox'
import MdOrderProduct from './MdOrderProduct'
import I18n from '*/Lang'
import ModalDropdown from 'react-native-modal-dropdown'

const TouchableHighlightAnim = Animatable.createAnimatableComponent(TouchableHighlight)

/**
 * NAME: Home Screen
 * CREATOR: KHIEM
 * Display Home Screen
 */
const arrSortSymbol = ['price', 'size', 'id']
export default class HomeScreen extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      arrProduct: [],
      page: 1,
      isLoadingProduct: true,
      objBuyActive: false,
      sortSymbol: 'price'
    }
    props.defaultThis(this)
  }

  async componentDidMount () {
    const { page, arrProduct } = this.state
    this.setState({ arrProduct: arrProduct.concat(await EmojiStore.getEmojiProduct(page, 10)) }, () =>
      this.setState({isLoadingProduct: false})
    )
  }

  keyExtractor = (item) => item.id

  renderItem = ({ item, index }) => {
    const dateFormat = this.formatDateTime(item.date)
    const { objBuyActive } = this.state
    const { handleBuyProduct, orderProduct } = this.props

    let isSold = false
    orderProduct.map((item) => {
      if (item.key === index) isSold = true
    })

    return (
      <View style={styles.itemContainer}>
        {/* Product face container */}
        <Animatable.View animation={'flipInY'} style={isSold ? styles.productSoldContainer : styles.productContainer}>
          <Text style={{ fontSize: item.size }}>{item.face}</Text>
          {isSold && <Text style={styles.txtSold}>{I18n.t('Initial.sold')}</Text>}
        </Animatable.View>
        {/* Price tag container */}
        <TouchableHighlightAnim underlayColor={'transparent'} animation={'flipInX'} disabled={isSold} onPress={() =>
          this.setState({objBuyActive: {key: index,
            isBuying: objBuyActive.key === index
              ? !objBuyActive.isBuying : true}})} >
          {
            objBuyActive.isBuying && objBuyActive.key === index
              ? <TouchableHighlightAnim underlayColor={'transparent'} animation={'flipInX'} onPress={() => handleBuyProduct()} style={styles.buyContainer}>
                <Text style={styles.txtBuy}>{I18n.t('Initial.buy')}</Text>
              </TouchableHighlightAnim>
              : <View style={styles.priceTagContainer}>
                <View style={styles.priceLeftContainer}>
                  <Text style={styles.priceColor}>{formatCentToDolar(item.price)}</Text>
                </View>
                {
                  typeof (dateFormat) === 'string'
                    ? <View style={styles.priceRightContainer}>
                      <Text style={styles.txtDayAgo}>{dateFormat}</Text>
                    </View>
                    : <View style={styles.priceRightContainer}>
                      <View style={styles.dateTimeContainer}>
                        <View style={styles.dateContainer}>
                          <Text style={styles.txtSmall}>{dateFormat.date}</Text>
                        </View>
                        <View style={styles.monthContainer}>
                          <Text style={styles.txtSmall} >{dateFormat.month}</Text>
                        </View>
                      </View>
                      <View style={styles.yearContainer}>
                        <Text style={styles.txtSmall}>{dateFormat.year}</Text>
                      </View>
                    </View>
                }
              </View>
          }

        </TouchableHighlightAnim>

      </View>
    )
  }

  formatDateTime (date) {
    const dateAdded = new Date(date)
    const currentDay = moment().format('YYYY/MM/DD')
    const dateAddedFormat = moment(dateAdded).format('YYYY/MM/DD')
    const timeStampHours = 1000 * 60 * 60
    const hours7Date = 24 * 7
    // Format date below
    const dateBetween = new Date(currentDay) - new Date(dateAddedFormat)

    const hoursRange7Date = (dateBetween / timeStampHours) - hours7Date
    return hoursRange7Date < 0
      ? (7 - (-hoursRange7Date / 24)) + I18n.t('Initial.dayago')
      : {
        date: dateAdded.getDate(),
        month: dateAdded.getMonth() + 1,
        year: dateAdded.getFullYear()
      }
  }

  renderDropRow (rowData) {
    return (
      <TouchableHighlight underlayColor='#C3C3C3' >
        <View style={styles.dropdownItem}>
          <Text> {rowData} </Text>
        </View>
      </TouchableHighlight>
    )
  }

  get renderHeaderCustomView () {
    const { sortSymbol } = this.state
    const { handleSort } = this.props

    return (
      <View style={styles.customHeaderContainer}>
        <ModalDropdown
          showsVerticalScrollIndicator={false}
          style={styles.dropdownButtonContainer}
          options={arrSortSymbol}
          defaultValue={'price'}
          dropdownStyle={styles.dropdownStyle}
          onSelect={handleSort}
          renderRow={this.renderDropRow.bind(this)} >
          <View style={styles.dropdownButton}>
            <Text style={styles.dropdownButtonText}> {sortSymbol}</Text>
          </View>
        </ModalDropdown>
      </View>
    )
  }

  // |------------------------------|
  // |--- RENDER MAIN VIEW START ---|
  // |------------------------------|
  render () {
    const { arrProduct, isLoadingProduct } = this.state
    const { loadMoreItem, advertisement, orderProduct } = this.props
    return (
      <View style={gStyles.backgroundDefault}>
        <CoreLayoutContainer
          customView={this.renderHeaderCustomView}
          isOrder={orderProduct.length > 0}
          rightAction={() => this.refs.mdOrderProduct.open()}
          rightIconStyle={styles.rightIconStyle}
          style={styles.bgColor} title={I18n.t('Initial.title')}>
          <View style={arrProduct.length > 0
            ? advertisement.length > 0 ? styles.viewContainerAds
              : styles.viewContainer : styles.viewContainerNoItem}>
            {
              arrProduct.length > 0
                ? <FlatList
                  data={arrProduct}
                  extraData={this.state}
                  keyExtractor={this.keyExtractor}
                  renderItem={this.renderItem}
                  numColumns={2}
                  onEndReached={loadMoreItem}
                  onEndReachedThreshold={0}
                />
                : <Text style={styles.txtNoItem}>{I18n.t('Initial.noItem')}</Text>
            }

          </View>

          {isLoadingProduct
            ? <Animatable.View animation={'flipInX'} style={styles.rowContainer}>
              <View style={styles.rowLeft}>
                <Text>{I18n.t('Initial.loading')}</Text>
              </View>
              <SpinnerKit style={styles.spkCreate} size={height(5)}
                type={'FadingCircle'} isVisible={true} />
              <View style={styles.rowRight}>
                <Text>{'New Products'}</Text>
              </View>
            </Animatable.View>
            : advertisement.length > 0 && advertisement[advertisement.length - 1].url.length > 0 &&
          <FastImage
            style={styles.imgAdvertisement}
            source={{
              uri: advertisement[advertisement.length - 1].url,
              priority: FastImage.priority.normal
            }}
            resizeMode={FastImage.resizeMode.cover} />
          }

        </CoreLayoutContainer>
        <Modal style={styles.modalFormStyle} backdrop={true} entry={'top'} position={'center'} swipeToClose={false}
          ref={'mdOrderProduct'} >
          <MdOrderProduct />
        </Modal>
      </View>
    )
  }
}
