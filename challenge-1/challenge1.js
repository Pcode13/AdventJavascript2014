//Sloution 1

function prepareGifts(gifts) {
    // Step 1: Remove duplicates using a Set
    const uniqueGifts = [...new Set(gifts)];
  
    // Step 2: Sort the unique gifts in ascending order
    uniqueGifts.sort((a, b) => a - b);
  
    return uniqueGifts;
  }
  
//Sloution 2
  function prepareGifts(gifts) {
    let uniqueGifts = [];
  
    // Step 1: Remove duplicates
    for (let i = 0; i < gifts.length; i++) {
      if (!uniqueGifts.includes(gifts[i])) {
        uniqueGifts.push(gifts[i]);
      }
    }
  
    // Step 2: Sort the unique gifts in ascending order
    for (let i = 0; i < uniqueGifts.length; i++) {
      for (let j = 0; j < uniqueGifts.length - i - 1; j++) {
        if (uniqueGifts[j] > uniqueGifts[j + 1]) {
          // Swap
          let temp = uniqueGifts[j];
          uniqueGifts[j] = uniqueGifts[j + 1];
          uniqueGifts[j + 1] = temp;
        }
      }
    }
  
    return uniqueGifts;
  }
  
  const gifts1 = [3, 1, 2, 3, 4, 2, 5];
  const preparedGifts1 = prepareGifts(gifts1);
  console.log(preparedGifts1); // Output: [1, 2, 3, 4, 5]