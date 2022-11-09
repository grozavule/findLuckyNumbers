/*
Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. 
(That is, do not repeat any numbers in the returned list.)

You can trust that this function will never be called with n < 0 or n > 10.
*/

//n represents the number of random numbers between 1 and 10 to return
function oneThroughTen(n){
    let result = [];//this array will hold the random numbers we generate
    let possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];//this holds all of the possible numbers
    let counter = 0;//this shows us how many times we ran the for loop
    
    if((n > 0) && (n <= 10))
    {
        for(let i = 0; i < n; i++)
        {
            let randomIndex = Math.floor(Math.random() * possibilities.length);
            result.push(possibilities[randomIndex]);
            possibilities.splice(randomIndex, 1);
            /*
            let randomNumber = Math.floor(Math.random() * 10) + 1;
            if(result.includes(randomNumber))
            {
                i--;
            }
            else
            {
                result.push(randomNumber);
            }
            counter++;
            */
           counter++;
        }
    }
    else
    {
        console.log(`${n} cannot be less than zero or greater than ten`);
    }
    console.log(counter);
    return result;
}
let result = oneThroughTen(5);
console.log(result);