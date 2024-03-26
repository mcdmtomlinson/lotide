const assertEqual = require('../assertEqual');
const head = require('../head');

//Test Code - Head.js
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1, 2, 3, 4]), 1);