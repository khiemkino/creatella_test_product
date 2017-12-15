import Settings from '../settings'
import QueryString from 'query-string'
/**
 * NAME: Emoji Store
 * CREATOR: Khiem
 * Handle calling api to get emoji Product
 */
export default class EmojiStore {
  // Get all emoji product as json
  static async getEmojiProduct (page, limit, sort) {
    let queryStr = QueryString.stringify({
      _page: page,
      _limit: limit,
      _sort: sort
    })
    return this.fetchData(queryStr)
  }

  // Get all emoji product as json
  static async getRandomAds (idAds) {
    let apiurl = Settings.server.ads + idAds
    try {
      let response = await fetch(apiurl)
      return response.url
    } catch (error) {
      return null
    }
  }

  static async fetchData (queryStr) {
    let apiurl = Settings.server.url + queryStr
    try {
      let response = await fetch(apiurl)
      let responJson = await response.json()
      return responJson
    } catch (error) {
      return []
    }
  }
}
