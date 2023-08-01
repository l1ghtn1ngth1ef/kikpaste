;(function (e) {
  const t = (e["cs"] = e["cs"] || {})
  t.dictionary = Object.assign(t.dictionary || {}, {
    "%0 of %1": "%0 z %1",
    Aquamarine: "Akvamarínová",
    Black: "Černá",
    Blue: "Modrá",
    "Dim grey": "Tmavě šedá",
    "Dropdown toolbar": "Rozbalovací panel nástrojů",
    "Edit block": "Upravit blok",
    "Editor block content toolbar": "Panel nástrojů obsahu bloku editoru",
    "Editor contextual toolbar": "Kontextový panel nástrojů editoru",
    "Editor editing area: %0": "Editační oblast editoru: %0",
    "Editor toolbar": "Panel nástrojů editoru",
    Green: "Zelená",
    Grey: "Šedá",
    HEX: "",
    "Insert paragraph after block": "Vložte odstavec za blok",
    "Insert paragraph before block": "Vložte odstavec před blok",
    "Light blue": "Světle modrá",
    "Light green": "Světle zelená",
    "Light grey": "Světle šedá",
    Next: "Další",
    Orange: "Oranžová",
    "Press Enter to type after or press Shift + Enter to type before the widget":
      "Stisknutím klávesy Enter můžete psát za widgetem a stisknutím Shift + Enter před ním",
    Previous: "Předchozí",
    Purple: "Fialová",
    Red: "Červená",
    Redo: "Znovu",
    "Rich Text Editor": "Textový editor",
    "Select all": "Vybrat vše",
    "Show more items": "Zobrazit další položky",
    Turquoise: "Tyrkysová",
    Undo: "Zpět",
    White: "Bílá",
    "Widget toolbar": "Panel nástrojů ovládacího prvku",
    Yellow: "Žlutá",
  })
  t.getPluralForm = function (e) {
    return e == 1 && e % 1 == 0 ? 0 : e >= 2 && e <= 4 && e % 1 == 0 ? 1 : e % 1 != 0 ? 2 : 3
  }
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}))
