test('1 - shopping cart', () => {
  const calculateTotal = require('./1-shopping-cart');
  
  const shoppingCart = [
    { priceByUnit: 20, quantity: 1 },
    { priceByUnit: 30, quantity: 3 },
    { priceByUnit: 2, quantity: 9 },
    { priceByUnit: 10, quantity: 2 },
  ];
  const total = calculateTotal(shoppingCart);
  expect(total).toBe(148);
});

// test('4 - new map, new filter', () => {
//   const { newMap, newFilter } = require('./4-map-and-filter');
  
//   let array = [3, 6, -9, 10, -1, 3];

//   let doubled = newMap(array, e => e*2);
//   let expectedDoubled = array.map(e => e*2);
//   expect(doubled).toEqual(expectedDoubled);

//   let negatives = newFilter(array, e => e < 0);
//   let expectedNegatives = array.filter(e => e < 0);
//   expect(negatives).toEqual(expectedNegatives);
// })

// test('6 - enrich data', () => {
//   const { enrichData, companiesMasterData, requestData } = require('./6-enrich-data');
  
//   const result = enrichData(requestData, companiesMasterData);
  
//   expect(result).toEqual([
//     { companyId: "1", companyName: "Apple Computer Inc.", ticker: "AAPL", starred: true },
//     { companyId: "2", companyName: "Microsoft Corp.", ticker: "MSFT", starred: false },
//     { companyId: "3", companyName: "Tesla Motors Company", ticker: "TSLA", starred: true },
//   ]);
// })