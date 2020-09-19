// Define const of count of candy

  const count = (money, price) => {

    // Inputs validation
    if (money <= 0 || price <= 0) {
      return 0;
    }
  
    // Result variable
    let result = 0;
  
    // Money left
    let rest = money;
  
    // Loop "Candy party" 
    while (rest >= price) {
      rest -= price;
      result++;
    }
  
    // Result
    return result;
    return rest;
  };
  // For 12.4eur, change the price of candy
  console.log(count(12.4, 1.14));

  console.log(count(12.4, 1.00));
  
  console.log(count(12.4, 2.50));