;(function (e) {
  const t = (e["sr"] = e["sr"] || {})
  t.dictionary = Object.assign(t.dictionary || {}, {
    "%0 of %1": "%0 of %1",
    Aquamarine: "Зеленкастоплава",
    Black: "Црна",
    Blue: "Плава",
    "Dim grey": "Бледо сива",
    "Dropdown toolbar": "Падајућа трака са алаткама",
    "Edit block": "Блок уређивач",
    "Editor block content toolbar": "Трака са алаткама за блокирање садржаја уређивача",
    "Editor contextual toolbar": "Контекстуална трака са алаткама Едитор",
    "Editor editing area: %0": "Област за уређивање уредника: %0",
    "Editor toolbar": "Уређивач трака са алаткама",
    Green: "Зелена",
    Grey: "Сива",
    HEX: "",
    "Insert paragraph after block": "Umetnite odlomak posle bloka",
    "Insert paragraph before block": "Umetnite odlomak pre bloka",
    "Light blue": "Светлоплава",
    "Light green": "Светлозелена",
    "Light grey": "Светло сива",
    Next: "Следећи",
    Orange: "Нараџаста",
    "Press Enter to type after or press Shift + Enter to type before the widget":
      "Притисните Ентер да куцате после или притисните Схифт + Ентер да куцате пре виџета",
    Previous: "Претходни",
    Purple: "Љубичаста",
    Red: "Црвена",
    Redo: "Поново",
    "Rich Text Editor": "Проширен уређивач текста",
    "Select all": "Означи све.",
    "Show more items": "Прикажи још ставки",
    Turquoise: "Тиркизна",
    Undo: "Повлачење",
    White: "Бела",
    "Widget toolbar": "Widget traka sa alatkama",
    Yellow: "Жута",
  })
  t.getPluralForm = function (e) {
    return e % 10 == 1 && e % 100 != 11
      ? 0
      : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
      ? 1
      : 2
  }
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}))
