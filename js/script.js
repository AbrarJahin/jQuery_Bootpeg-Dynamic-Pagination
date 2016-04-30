$('#show_paginator').bootpag({
   total: 58,
   page: 2,
   maxVisible: 5,
   leaps: true,
   firstLastUse: true,
   first: '←',
   last: '→',
   wrapClass: 'pagination',
   activeClass: 'active',
   disabledClass: 'disabled',
   nextClass: 'next',
   prevClass: 'prev',
   lastClass: 'last',
   firstClass: 'first'
}).on('page', function(event, num)
{
    $("#dynamic_content").html("Page " + num); // or some ajax content loading...
});