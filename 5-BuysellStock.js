// prices = [7,1,5,3,6,4] 
//output = 5

const maxProfit = function (prices) {
    let minStockpurchasePrice = prices[0] || 0;
    let profit = 0;

    for (let i = 1; i < prices.length; i++){
       if(prices[i] < minStockpurchasePrice) {
            minStockpurchasePrice = prices[i];
       }
       
       profit = Math.max(profit, prices[i] - minStockpurchasePrice);
    }
    return profit; 
}


console.log(maxProfit([7,1,5,3,6,4]));