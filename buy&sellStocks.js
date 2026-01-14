// Q5 - Best time to buy and sell stocks:
// You are given an array prices where prices[i] is the price of the given stock
// on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock
// and choosing a different day in the future to sell that stock.
// Return the maximum profit ,If you cannot achieve any profit , return 0.

// Input : prices = [7,1,5,3,6,4]; ==> o/p: 5;
// Input: prices = [7,6,4,3,1];    ==> o/p: 0;

// Brute force solution
// function maxProfit(prices) {
//   let globalProfit = 0;

//   for (let i = 0; i < prices.length-1; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       const curretProfit = prices[j] - prices[i];

//       if (curretProfit > globalProfit) globalProfit = curretProfit;
//     }
//   }
//   return globalProfit;
// }
// console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// Greedy algorithm
const maxProfit = function (prices) {
  let minStockPurchasePrice = prices[0] || 0;
    let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minStockPurchasePrice){
    minStockPurchasePrice = prices[i];
  }

  profit = Math.max(profit, prices[i] - minStockPurchasePrice);
 
}
return profit;
};
console.log(maxProfit([7,6,5,4,3,1]));
