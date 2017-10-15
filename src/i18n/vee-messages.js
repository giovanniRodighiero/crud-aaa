export default {
  _default: function (e) {
    return "Il valore di " + e + " non è valido."
  },
  alpha_dash: function (e) {
    return "Il valore di " + e + " può contenere caratteri alfa-numerici così come trattini ( - ) e underscore ( _ ).";
  },
  alpha_num: function (e) {
    return "Il valore di " + e + " può contenere solo caratteri alfa-numerici.";
  },
  alpha_spaces: function (e) {
    return "Il valore di " + e + " può contenere solo caratteri alfabetici e spazi";
  },
  alpha: function (e) {
    return "Il valore di " + e + " può contenere solo caratteri alfabetici.";
  },
  between: function (e, n) {
    return "Il valore di " + e + " deve essere compreso tra " + n[0] + " e " + n[1] + ".";
  },
  confirmed: function (e) {
    return "Il valore di conferma di " + e + " non corrisponde.";
  },
  credit_card: function (e) {
    return "Il valore di " + e + " non è valido."
  },
  decimal: function (e, n) {
    void 0 === n && (n = ["*"]);
    var t = n[0];
    return "Il valore di " + e + " deve essere numeri e può contentere " + (t && "*" !== t ? t : "") +  " cifre decimali.";
  },
  digits: function (e, n) {
    return "Il valore di " + e + " deve essere numeri e deve contenere esattamente " + n[0] + " cifre.";
  },
  dimensions: function (e, n) {
    return "La dimensione di " + e + " deve essere di " + n[0] + " pixels by " + n[1] + " pixels.";
  },
  email: function (e) {
    return "Il valore di " + e + " deve essere un indirizzo email valido."
  },
  ext: function (e) {
    return "Il valore di " + e + " deve essere un file valido.";
  },
  image: function (e) {
    return "Il valore di " + e + " deve essere un'immagine.";
  },
  in: function (e) {
    return "Il valore di " + e + " deve essere un valore valido."
  },
  integer: function (e) {
    return "Il valore di " + e + " deve essere un intero.";
  },
  ip: function (e) {
    return "Il valore di " + e + " deve essere un indirizzo ip valido.";
  },
  length: function (e, n) {
    var t = n[0],
      i = n[1];
    return  i ? "Il valore di " + e + " deve avere una lunghezza compresa tra " + t + " e " + i + "." : "Il valore di " + e + " deve avere una lunghezza di " + t + ".";
  },
  max: function (e, n) {
    return "Il valore di " + e + " non può essere maggiore di " + n[0] + " caratteri.";
  },
  max_value: function (e, n) {
    return "Il valore di " + e + " deve essere di " + n[0] + " o meno.";
  },
  mimes: function (e) {
    return "Il valore di " + e + " deve essere un tipo di file valido";
  },
  min: function (e, n) {
    return "Il valore di " + e + " non può essere inferiore a " + n[0] + " caratteri.";
  },
  min_value: function (e, n) {
    return "Il valore di " + e + " deve essere di " + n[0] + " o più.";
  },
  not_in: function (e) {
    return "Il valore di " + e + " deve essere un valore valido."
  },
  numeric: function (e) {
    return "Il valore di " + e + " può contenere solo valori numerici."
  },
  regex: function (e) {
    return "Il valore di " + e + " presenta un formato non valido.";
  },
  required: function (e) {
    return "Il valore di " + e + " non può essere lasciato in bianco.";
  },
  size: function (e, t) {
    var i = t[0];
    return "Le dimensioni di " + e + " devono essere inferiori a " + n(i) + ".";
  },
  url: function (e) {
    return "Il valore di " + e + " non è un URL valido.";
  }
};