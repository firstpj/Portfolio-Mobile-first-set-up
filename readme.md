# create a development branch
{
  "connector": {
    "name": "local",
    "options": {
      "pattern": ["**", "!.git/**", "!node_modules/**"]
    }
  },
  "extends": ["development"],
  "formatters": ["stylish"],
  "hints": [
    "button-type",
    "disown-opener",
    "html-checker",
    "meta-charset-utf-8",
    "meta-viewport",
    "no-inline-styles:error"
  ]
}