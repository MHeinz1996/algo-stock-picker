exports.picker = function(prices) {
    let largestProfit = 0

    for(i=0; i<prices.length; i++) {
        for(j=1; j<prices.length; j++) {
            if(i<j) {
                let profit = prices[j] - prices[i]
                    if(profit > largestProfit) {
                        largestProfit = profit
                        buySell = [i, j]
                    }
            }
        }
    }

    return buySell
}

// console.log(exports.picker([17,3,6,9,15,8,6,1,10]))