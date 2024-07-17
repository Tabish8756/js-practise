/*----------------------------Throtlling Technique-----------------------------  */

// Throtlling Technique is used to limit the number of times a function can be called over time.
// It is used to ensure that the function is not called more than once in a given time frame.
// It is used to optimize the performance of the application.
// It is used to improve the performance of the application by limiting the number of times a function can be called in a given time frame.

// Throttle is wrapper function that 2 arguments, the main function and the delay time.
// In the function we user timeFlag to keep track of the timer.
//When ever the timer flag is null, we call the main function and set the timer flag to the setTimeout function.

const Throtlle = (mainFucntion, delay) => {
  let timerFlag = null;  //variable to track the timer
  return()=>{
    if(timerFlag === null){  //checking if the timer is null or no timer is running
        mainFucntion(); //calling the main function
        timerFlag = setTimeout(()=>{
           timerFlag = null; //resetting the timer
        }, delay)
    }
  }
}

const fetchData = () => {
    console.log("Fetching Data");
}

const throttledFetchData = Throtlle(fetchData, 3000);