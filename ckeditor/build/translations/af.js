;(function (n) {
  const i = (n["af"] = n["af"] || {})
  i.dictionary = Object.assign(i.dictionary || {}, {
    "%0 of %1": "%0 van %1",
    "Show more items": "Wys meer items",
  })
  i.getPluralForm = function (n) {
    return n != 1
  }
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}))
