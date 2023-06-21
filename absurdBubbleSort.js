function askIfGreaterThan(el1, el2, isGreaterThan) {

    const readline = require('readline');

    const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

    isGreaterThan = true


    reader.question(`Is ${el1} greater than ${el2}?`, function(res) {
       if (res === 'yes') {
        IsGreaterThan = true
       }
       else {
        IsGreaterThan = false
        reader.close();
       };
        
    });
};

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    // madeAnySwaps = false;
    if (i<arr.length-1) {
        // if (arr[i] > arr[i+1]) {
        //     temp = arr[i], arr[i] = arr[i+1],arr[i+1]=temp;
        // };
        askIfGreaterThan(arr[i],arr[i+1],isGreaterThan) {
            if (isGreaterThan) {const temp = arr[i]; 
                arr[i] = arr[i+1]; 
                arr[i+1]=temp; 
                madeAnySwaps = true};
        };
        innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
    };

    // return arr;
    
    // outerBubbleSortLoop(madeAnySwaps);
};

innerBubbleSortLoop([2,1,3,4,2],0,madeAnySwaps=false);

function outerBubbleSortLoop(madeAnySwaps) {
    console.log("here!");
    //checking if sorted
    //function(boolean) {return boolean} if madeAnySwaps, run innerBubbleSortLoop

}

function absurdBubbleSort(arr, sortCompletionCallback) {

    

    
};




