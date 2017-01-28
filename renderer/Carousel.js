const $ = require("jquery");

function Carousel(){
  $('<div/>', {
    class: 'carousel'
  }).appendTo('body');
}

module.exports = Carousel;
