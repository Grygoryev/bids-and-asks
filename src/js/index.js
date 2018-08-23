
// $.getJSON('../data.json', function(data) {         
$.getJSON('https://grygoryev.github.io/bids-and-asks/build/data.json', function(data) {         
  console.log(data);
  const bids = data.bids;
  const asks = data.asks;

  let totalBids = 0;
  let totalAsks = 0;

  for (let i = 0; i < bids.length; i++) {
    totalBids += +bids[i].quantity;
    let totalLevelWidth = (totalBids / 7) + 'px';

    $('#bids').append(
      '<div class="bids-body__line">' + 
        '<div class="bids-body__count">' +
          bids[i].numberOfOrders + 
        '</div>' +  
        '<div class="bids-body__total">' +
          +totalBids.toFixed(3) + 
        '</div>' +  
        '<div class="bids-body__amount">' + 
          bids[i].quantity +
        '</div>' +
        '<div class="bids-body__price">' + 
        '<div class="bids-body__level-total" style=" width:' + totalLevelWidth + ';"  id="bids' + i + ' "></div>' +
          bids[i].price +
        '</div>' +
      '</div>' 
    )
  }

  for (let i = 0; i < asks.length; i++) {
    totalAsks += +asks[i].quantity;
    let totalLevelWidth = (totalAsks / 7) + 'px';
    
    $('#asks').append(
      '<div class="asks-body__line">' + 

        '<div class="asks-body__price">' + 
          '<div class="asks-body__level-total" style=" width:' + totalLevelWidth + ';" id="asks' + i + ' "></div>' +
          asks[i].price +
        '</div>' +  
        '<div class="asks-body__amount">' + 
          asks[i].quantity +
        '</div>' +
        '<div class="asks-body__total">' +
          +totalAsks.toFixed(3) + 
        '</div>' +
        '<div class="asks-body__count">' +
          asks[i].numberOfOrders + 
        '</div>' +

      '</div>' 
    )
  }
});

$('#bids').scroll(function() {
  $('#asks').scrollTop($('#bids').scrollTop());
});

$('#asks').scroll(function() {
  $('#bids').scrollTop($('#asks').scrollTop());
});

