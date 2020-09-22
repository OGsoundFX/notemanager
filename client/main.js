import { event } from 'jquery';
import { Template } from 'meteor/templating';
import { Entries } from '../lib/collection.js';

import './main.html';

Template.body.helpers({
  entries(){
    return [Entries.find({})];
  },

  // entries:[
  //   Entries.find()
  // ]

  // entries:[
  //   {
  //     "title": "testing",
  //     "topics": [],
  //     "content": "",
  //     "link": "",
  //     "mainCategory": "Rails"
  //   },
  //   {
  //     "title": "Trying again",
  //     "topics": [],
  //     "content": "",
  //     "link": "",
  //     "mainCategory": "AngularJS"
  //   },
  //   {
  //     "title": "Here's a new entry",
  //     "topics": [
  //       "ajax",
  //       "rails"
  //     ],
  //     "content": "This is very complicated",
  //     "link": "",
  //     "mainCategory": "Node.js"
  //   },
  //   {
  //     "title": "npm",
  //     "topics": [
  //       "node",
  //       "javascript",
  //       "manager"
  //     ],
  //     "content": "npm is node packet manager",
  //     "link": "",
  //     "mainCategory": "Node.js"
  //   },
  //   {
  //     "title": "IIFE, Immediately Invoked Function Expression:",
  //     "topics": [
  //       "AngularJS",
  //       "javascript",
  //       "function"
  //     ],
  //     "content": "(() => {})()\n    This is an anonymous IIFE that uses the ES6 arrow syntax. The function is () => {}, it has no names and takes no arguments.\n    It is incapsulated in () which makes it inaccessible to the general scope and has its own scope.\n    The function becomes a function expression which is immediately executed. The variable within the expression can not be accessed from outside it.\n    Assigning the IIFE to a variable stores the function's return value, not the function definition itself.",
  //     "link": "",
  //     "mainCategory": "Javascript"
  //   }
  // ]
});


Template.add.events({
  'submit .add-form': function() {
    // event.preventDefault();

    const target = event;
    console.log(target);

    return false;
  }
 });
