/*--------------------------------Debouncing Technique---------------------------- */
//Debouncing is technique that is used to delay the execution of function until after some time has passed since the last time the function was called.
//It is used to optimize the performance of the application.

/*-------------------------------Usage of  the Debouncing---------------------------- */
//Having a search box in which we need to show the suggestion as the user type. And suggestion data is coming from the api.
//So we call the function on every stroke it will cause too many call to db and will slow the application.

//So improve the this functionality we will use the debounce technique.
//So we will create a wrapper function that will take the two arguments main function and delay time. //

const debounce = (mainFunction, delay) => {
   let timer;             //
   return () => {
    clearTimeout(timer);
    timer = setTimeout(()=>{
        mainFunction();
    }, delay)
   }
}

const fetchData = () => {
    console.log("Fetching Data");

}

const debounceFetchData = debounce(fetchData, 3000);