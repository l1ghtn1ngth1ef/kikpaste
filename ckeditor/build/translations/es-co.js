;(function (o) {
  const e = (o["es-co"] = o["es-co"] || {})
  e.dictionary = Object.assign(e.dictionary || {}, {
    "%0 of %1": "%0 de %1",
    "Show more items": "Mostrar más elementos",
  })
  e.getPluralForm = function (o) {
    return o == 1 ? 0 : o != 0 && o % 1e6 == 0 ? 1 : 2
  }
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}))
