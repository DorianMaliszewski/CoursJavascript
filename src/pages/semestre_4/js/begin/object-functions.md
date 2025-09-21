---
layout: "layouts/Layout.astro"
title: "Object functions"
type: "tp"
---

# Utilisation de la classe Object

## Fonction Object.entries()

La fonction <code>Object.entries()</code> permet de retourner un tableau
de toutes les propriétés et valeurs d'un objet. L'exemple suivant
utilise <code>Object.entries()</code> pour retourner un tableau des
propriétés et valeurs d'un objet:

```js
let person = { name: "John", age: 30 };
let entries = Object.entries(person);
console.log(entries); // [['name', 'John'], ['age', 30]]
```

## Fonction Object.keys()

La fonction <code>Object.keys()</code> permet de retourner un tableau
des propriétés d'un objet. L'exemple suivant utilise{" "}
<code>Object.keys()</code> pour retourner un tableau des propriétés d'un
objet:

```js
let person = { name: "John", age: 30 };
let keys = Object.keys(person);
console.log(keys); // ['name', 'age']
```

## Fonction Object.values()

La fonction <code>Object.values()</code> permet de retourner un tableau
des valeurs des propriétés d'un objet. L'exemple suivant utilise{" "}
<code>Object.values()</code> pour retourner un tableau des valeurs des
propriétés d'un objet:

```js
let person = { name: "John", age: 30 };
let values = Object.values(person);
console.log(values); // ['John', 30]
```
