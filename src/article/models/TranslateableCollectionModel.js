import DefaultCollectionModel from './DefaultCollectionModel'

export default class TranslateableCollectionModel extends DefaultCollectionModel {
  addItem (item) { // eslint-disable-line no-unused-vars
    // TODO: adding a figure like this would be possible in a classical Substance Data model
    // but it is not clear how to persist this in the JATS XML model
  }

  removeItem (item) { // eslint-disable-line no-unused-vars
  }

  getItems () {
    return this._api.getTranslatables()
  }

  _getCollectionId () {
    return 'translateables'
  }
}
