;(function (e) {
  const r = (e["ro"] = e["ro"] || {})
  r.dictionary = Object.assign(r.dictionary || {}, {
    "%0 of %1": "%0 din %1",
    Aquamarine: "Acvamarin",
    Black: "Negru",
    Blue: "Albastru",
    "Dim grey": "Gri slab",
    "Dropdown toolbar": "Bară listă opțiuni",
    "Edit block": "Editează bloc",
    "Editor block content toolbar": "Bară de instrumente editor pentru blocuri de conținut",
    "Editor contextual toolbar": "Bară contextuală de instrumente editor",
    "Editor editing area: %0": "Zonă editare editor: %0",
    "Editor toolbar": "Bară editor",
    Green: "Verde",
    Grey: "Gri",
    HEX: "",
    "Insert paragraph after block": "Inserează un paragraf după bloc",
    "Insert paragraph before block": "Inserează un paragraf înaintea blocului",
    "Light blue": "Albastru deschis",
    "Light green": "Verde deschis",
    "Light grey": "Gri deschis",
    Next: "Înainte",
    Orange: "Portocaliu",
    "Press Enter to type after or press Shift + Enter to type before the widget":
      "Apăsați Enter pentru a scrie după widget sau Shift+Enter pentru a scrie înaintea acestuia",
    Previous: "Înapoi",
    Purple: "Violet",
    Red: "Roșu",
    Redo: "Revenire",
    "Rich Text Editor": "Editor de text",
    "Select all": "Selectează-le pe toate",
    "Show more items": "Arată mai multe elemente",
    Turquoise: "Turcoaz",
    Undo: "Anulare",
    White: "Alb",
    "Widget toolbar": "Bară widget",
    Yellow: "Galben",
  })
  r.getPluralForm = function (e) {
    return e == 1 ? 0 : e % 100 > 19 || (e % 100 == 0 && e != 0) ? 2 : 1
  }
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}))
