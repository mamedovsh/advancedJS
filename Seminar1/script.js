// let musicCollection = {
//     albums: [
//         {title: "Album",artist: "Artist",year: "2008"},
//         {title: "Album2",artist: "Artist2",year: "2009"},
//         {title: "Album3",artist: "Artist3",year: "2007"}
//     ],

//     [Symbol.iterator]: function Symbol() {
//         let index = 0;
//         return {
//             next: function() {
//                 if (index < musicCollection.albums.length) {
//                     return {value: musicCollection.albums[index++], done: false}
//                 } else {
//                     return { done: true}
//                 }
//             }
//         };
//     }
// };


// for (const album of musicCollection) {
//     console.log(`${album.title} - ${album.artist} (${album.year})`);
//   }



// Создаем коллекцию для хранения блюд и их поваров
const dishesMap = new Map([
    ['Пицца "Маргарита"', 'Виктор'],
    ['Пицца "Пепперони"', 'Виктор'],
    ['Суши "Филадельфия"', 'Ольга'],
    ['Суши "Калифорния"', 'Ольга'],
    ['Тирамису', 'Дмитрий'],
    ['Чизкейк', 'Дмитрий']
  ]);
  
  // Создаем коллекцию для хранения заказов каждого клиента
  const ordersMap = new Map();
  
  // Записываем заказы клиентов
  const clientAlexey = { name: 'Алексей' };
  ordersMap.set(clientAlexey, ['Пицца "Пепперони"', 'Тирамису']);
  
  const clientMaria = { name: 'Мария' };
  ordersMap.set(clientMaria, ['Суши "Калифорния"', 'Пицца "Маргарита"']);
  
  const clientIrina = { name: 'Ирина' };
  ordersMap.set(clientIrina, ['Чизкейк']);
  
  // Выводим информацию о заказах
  ordersMap.forEach((dishes, client) => {
    console.log(`${client.name} заказал: ${dishes.join(', ')}`);
  });
  
  // Выводим информацию о том, какой повар готовит какое блюдо
  dishesMap.forEach((chef, dish) => {
    console.log(`Повар ${chef} готовит ${dish}`);
  });
