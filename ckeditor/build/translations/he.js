;(function (e) {
  const t = (e["he"] = e["he"] || {})
  t.dictionary = Object.assign(t.dictionary || {}, {
    "%0 of %1": "%0 מתוך %1",
    Aquamarine: "ירוק-כחלחל",
    Black: "שחור",
    Blue: "כחול",
    "Dim grey": "אפור עמום",
    "Dropdown toolbar": "סרגל כלים נפתח",
    "Edit block": "הגדרות בלוק",
    "Editor block content toolbar": "סרגל כלים של תוכן בלוק של העורך",
    "Editor contextual toolbar": "סרגל כלים הקשרי של העורך",
    "Editor editing area: %0": "אזור עריכה של העורך: %0",
    "Editor toolbar": "סרגל הכלים",
    Green: "ירוק",
    Grey: "אפור",
    HEX: "",
    "Insert paragraph after block": "הוספת פסקה מתחת",
    "Insert paragraph before block": "הוספת פסקה מעל",
    "Light blue": "כחול בהיר",
    "Light green": "ירוק בהיר",
    "Light grey": "אפור בהיר",
    Next: "הבא",
    Orange: "כתום",
    "Press Enter to type after or press Shift + Enter to type before the widget":
      "לחץ Enter כדי להקליד לפני היישומון או Shift + Enter כדי להקליד אחריו",
    Previous: "הקודם",
    Purple: "סגול",
    Red: "אדום",
    Redo: "ביצוע מחדש",
    "Rich Text Editor": "עורך טקסט עשיר",
    "Select all": "בחר הכל",
    "Show more items": "הצג פריטים נוספים",
    Turquoise: "טורקיז",
    Undo: "ביטול",
    White: "לבן",
    "Widget toolbar": "סרגל יישומון",
    Yellow: "צהוב",
  })
  t.getPluralForm = function (e) {
    return e == 1 && e % 1 == 0
      ? 0
      : e == 2 && e % 1 == 0
      ? 1
      : e % 10 == 0 && e % 1 == 0 && e > 10
      ? 2
      : 3
  }
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}))
