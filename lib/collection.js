import { Mongo } from 'meteor/mongo';

const Entries = new Mongo.Collection('entries');

export { Entries };