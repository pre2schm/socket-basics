var moment = require('moment');
var now = moment();

// console.log(now.format());
// console.log(now.format ('X'));
// console.log(now.format('x'));
// console.log(now.valueOf());

var timestamp = (now.valueOf());
var timestampMoment = moment.utc(timestamp);


console.log(timestampMoment.local().format('h:mm a'));
//now.add
// now.subtract(1, 'year');

// console.log(now.format());
// console.log(now.format('MMM Do YYYY h:mma'));