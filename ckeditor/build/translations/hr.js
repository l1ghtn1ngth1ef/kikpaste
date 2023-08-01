;(function (e) {
  const a = (e["hr"] = e["hr"] || {})
  a.dictionary = Object.assign(a.dictionary || {}, {
    "%0 of %1": "%0 od %1",
    Aquamarine: "Akvamarin",
    Black: "Crna",
    Blue: "Plava",
    "Dim grey": "Tamnosiva",
    "Dropdown toolbar": "Traka padajućeg izbornika",
    "Edit block": "Uredi blok",
    "Editor block content toolbar": "",
    "Editor contextual toolbar": "",
    "Editor editing area: %0": "Područje Editora: %0",
    "Editor toolbar": "Traka uređivača",
    Green: "Zelena",
    Grey: "Siva",
    HEX: "",
    "Insert paragraph after block": "Umetni odlomak poslije bloka",
    "Insert paragraph before block": "Umetni odlomak prije bloka",
    "Light blue": "Svijetloplava",
    "Light green": "Svijetlozelena",
    "Light grey": "Svijetlosiva",
    Next: "Sljedeći",
    Orange: "Narančasta",
    "Press Enter to type after or press Shift + Enter to type before the widget":
      "Pritisnite Enter za upisivanje nakon ili pritisnite Shift + Enter za upisivanje prije widgeta",
    Previous: "Prethodni",
    Purple: "Ljubičasta",
    Red: "Crvena",
    Redo: "Ponovi",
    "Rich Text Editor": "Rich Text Editor",
    "Select all": "Odaberi sve",
    "Show more items": "Prikaži više stavaka",
    Turquoise: "Tirkizna",
    Undo: "Poništi",
    White: "Bijela",
    "Widget toolbar": "Traka sa spravicama",
    Yellow: "Žuta",
  })
  a.getPluralForm = function (e) {
    return e % 10 == 1 && e % 100 != 11
      ? 0
      : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
      ? 1
      : 2
  }
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}))
