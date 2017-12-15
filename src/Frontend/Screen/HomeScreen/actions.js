import { setAdvertisement } from '#/Redux/actions/mainActions'
import { setOrderProduct } from '#/Redux/actions/globalActions'

import EmojiStore from '#/API/EmojiStore'

var THIS
const arrSortSymbol = ['price', 'size', 'id']
export const defaultThis = (_this) => {
  return (dispatch, getState) => {
    THIS = _this
  }
}

export const loadMoreItem = (event) => {
  return (dispatch, getState) => {
    const { arrProduct, page, isLoadingProduct } = THIS.state
    const { advertisement } = THIS.props
    if (!isLoadingProduct) {
      THIS.setState({isLoadingProduct: true})
      THIS.setState({ page: page + 1 }, async () => {
        THIS.setState({ isLoadingProduct: false, arrProduct: arrProduct.concat(await getProduct()) },
          async () => {
            if ((arrProduct.length / 2) % 2 === 0) {
              let arrAdsFilter = []
              if (advertisement.length > 0) {
                advertisement.map(item => arrAdsFilter.push(item.key))
              }
              let newIdAds = 0

              while (arrAdsFilter.includes(newIdAds)) {
                newIdAds = Math.floor(Math.random() * 1000)
              }
              let url = await EmojiStore.getRandomAds(newIdAds)
              let arrAdvertisement = {key: newIdAds, url}

              dispatch(setAdvertisement(advertisement.concat(arrAdvertisement)))
            }
          }
        )
      })
    }
  }
}

const getProduct = async () => {
  const { page } = THIS.state
  let arrJsonProduct = await EmojiStore.getEmojiProduct(page, page >= 10 ? 15 : 10)
  return arrJsonProduct
}

export const handleBuyProduct = () => {
  return (dispatch, getState) => {
    const { objBuyActive, arrProduct } = THIS.state
    const { orderProduct } = THIS.props

    let arrBuyProduct = [{key: objBuyActive.key, price: arrProduct[objBuyActive.key].price, face: arrProduct[objBuyActive.key].face}]
    dispatch(setOrderProduct(orderProduct.concat(arrBuyProduct)))
    THIS.setState({objBuyActive: {key: objBuyActive.key, isBuying: false}})
  }
}

export const handleSort = (idxSelect) => {
  return async (dispatch, getState) => {
    const { arrProduct } = THIS.state
    THIS.setState({isLoadingProduct: true})

    THIS.setState({ sortSymbol: arrSortSymbol[idxSelect],
      arrProduct: await EmojiStore.getEmojiProduct('', arrProduct.length, arrSortSymbol[idxSelect]) }, () =>
      THIS.setState({isLoadingProduct: false})
    )
  }
}
