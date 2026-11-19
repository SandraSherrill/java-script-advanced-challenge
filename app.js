function showRating(rating) {
  let ratings = "";  
  for (let i = 0; i < Math.floor(rating); i++) {
    ratings += "*";
    if (i !== Math.floor(rating) - 1) {
      ratings += " ";
    }
  }
  if (!Number.isInteger(rating)) {
    ratings += " .";
  }
  return ratings;
}

console.log(showRating(4)); 
// * * * *
console.log(showRating(3.5));
// * * * .


function sortLowToHigh(nums) {
  return nums.sort((a, b) => a - b);
}

console.log(sortLowToHigh([5, 2, 9, 1, 5, 6])); 
// [1, 2, 5, 5, 6, 9]
console.log(sortLowToHigh([3, 0, -2, 10, 7]));
// [-2, 0, 3, 7, 10]


function sortHighToLow(prices) {
  return prices.sort((a, b) => b.price - a.price);
}

console.log(sortHighToLow( [{id:1, price:50}, {id:2, price:30}, {id:3, price:60}, {id:4, price:10}]));
// [ { id: 3, price: 60 }, { id: 1, price: 50 }, { id: 2, price: 30 }, { id: 4, price: 10 } ]


async function postByUser(userId) {
  const promise = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const result = await promise.json();
  const posts = result.filter(element => element.userId === userId);
  console.log(posts);
}
postByUser(4)


async function firstSixIncomplete(todos) {
  const promise = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const result = await promise.json();
  const incompleteTodos = result.filter(element => !element.completed);
  console.log(incompleteTodos.slice(0, 6));
}
firstSixIncomplete()
