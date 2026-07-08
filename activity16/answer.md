# Advanced JavaScript Activity: Answer Template

---

## Task 1: Data Structures & References

```javascript
const library = {
  books: [
    { title: "Hunger for Dystopian: Sampler", author: "Anna Carey", isAvailable: true },
    { title: "The Fierce Reads Anthology", author: "Anna Banks", isAvailable: true }
  ]
};

const copyLibrary = { ...library }; 
copyLibrary.books[0].isAvailable = false;

console.log(copyLibrary.books[0].isAvailable);
console.log(library.books[0].isAvailable);     
//when I changed my copy the  original also changed to prevent thisdeep copy it using this syntax const copyLibrary = structuredClone(library);



```

## Task 2: Advanced Conditional Logic (Validation)

```javascript
function validatePassword(password) {
    if (password.length < 8) {
        return "Error: Password must be at least 8 characters long.";
    }

    if (password === password.toLowerCase()) {
        return "Error: Password must contain at least one uppercase letter.";
    }

    let hasNumber = false;
    for (let i = 0; i < password.length; i++) {
        if (password[i] >= '0' && password[i] <= '9') {
            hasNumber = true;
            break;
        }
    }
    if (!hasNumber) {
        return "Error: Password must contain at least one number.";
    }

    if (password.toLowerCase().includes("password")) {
        return "Error: Password must not contain the word 'password'.";
    }

    return "Strong Password";
}


```

## Task 3: Complex Iteration (Algorithms)

```javascript
console.log(generateFibonacci(7));

function generateFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];

    let sequence = [0, 1];

    for (let i = 2; i < n; i++) {
        let nextNumber = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNumber);
    }

    return sequence;
}


```

## Task 4: Higher-Order Functions & Callbacks

```javascript
function processData(dataArray, callback) {
    let result = [];

    for (let i = 0; i < dataArray.length; i++) {
        let processedValue = callback(dataArray[i]);
        result.push(processedValue);
    }

    return result;
}


```

## Task 5: Functional Array Methods (Map, Filter, Reduce)

```javascript
const transactions = [
  { type: "deposit", amount: 150 },
  { type: "withdrawal", amount: 50 },
  { type: "deposit", amount: 200 },
  { type: "withdrawal", amount: 80 }
];

const amounts = transactions.map(function(transaction) {
  if (transaction.type === "deposit") {
    return transaction.amount;
  } else {
    return -transaction.amount;
  }
});

const finalBalance = amounts.reduce(function(total, currentNumber) {
  return total + currentNumber;
}, 0);

console.log(finalBalance);

```