import React, {PureComponent} from 'react'
import { Text, View, FlatList } from 'react-native'
// Style Component
import styles from './styles'
import { connect } from 'react-redux'
import gStyles from '@/globalStyles'
// Language
import { formatCentToDolar } from '@/globalFunction'
import I18n from '*/Lang'

class OrderProduct extends PureComponent {
  keyExtractor = (item, index) => index

  renderItem = ({ item, index }) => {
    return (
      <View style={styles.productContainer}>
        <View style={styles.flexRow}>
          <View style={styles.itemContainer}>
            <Text >{I18n.t('Initial.product')}</Text>
          </View>
          <Text style={styles.txtContainer}>{item.face}</Text>
        </View>
        <View style={styles.flexRow}>
          <View style={styles.itemContainer}>
            <Text >{I18n.t('Initial.price')}</Text>
          </View>
          <Text style={styles.txtContainer}>{formatCentToDolar(item.price)}</Text>
        </View>

      </View>
    )
  }

  render () {
    const { orderProduct } = this.props
    return (
      <View style={gStyles.backgroundDefault}>
        <View style={styles.headerStyle}>
          <Text style={styles.txtTitle}>{I18n.t('Initial.productList')}</Text>
        </View>

        <View style={styles.productList}>
          <FlatList
            data={orderProduct}
            numColumns={2}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

export default connect(mapStateToProps)(OrderProduct)
