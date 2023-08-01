;(function (a) {
  const t = (a["lv"] = a["lv"] || {})
  t.dictionary = Object.assign(t.dictionary || {}, {
    "%0 of %1": "%0 no %1",
    Aquamarine: "Akvamarīns",
    Black: "Melns",
    Blue: "Zils",
    "Dim grey": "Blāvi pelēks",
    "Dropdown toolbar": "Papildus izvēlnes rīkjosla",
    "Edit block": "Labot bloku",
    "Editor block content toolbar": "Rediģēšanas bloka satura rīkjosla",
    "Editor contextual toolbar": "Redaktora konteksta rīkjosla",
    "Editor editing area: %0": "Redaktora rediģēšanas zona: %0",
    "Editor toolbar": "Redaktora rīkjosla",
    Green: "Zaļš",
    Grey: "Pelēks",
    HEX: "",
    "Insert paragraph after block": "Ievietot paragrāfu aiz bloka",
    "Insert paragraph before block": "Ievietot paragrāfu pirms bloka",
    "Light blue": "Gaiši zils",
    "Light green": "Gaiši zaļš",
    "Light grey": "Gaiši pelēks",
    Next: "Nākamā",
    Orange: "Oranžs",
    "Press Enter to type after or press Shift + Enter to type before the widget":
      "Nospiediet taustiņu Enter, lai rakstītu aiz logrīka, vai nospiediet taustiņu Shift + Enter, lai rakstītu pirms logrīka",
    Previous: "Iepriekšējā",
    Purple: "Violets",
    Red: "Sarkans",
    Redo: "Uz priekšu",
    "Rich Text Editor": "Bagātinātais Teksta Redaktors",
    "Select all": "Izvēlēties visu",
    "Show more items": "Parādīt vairāk vienumus",
    Turquoise: "Tirkīza",
    Undo: "Atsaukt",
    White: "Balts",
    "Widget toolbar": "Sīkrīku rīkjosla",
    Yellow: "Dzeltens",
  })
  t.getPluralForm = function (a) {
    return a % 10 == 1 && a % 100 != 11 ? 0 : a != 0 ? 1 : 2
  }
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}))
