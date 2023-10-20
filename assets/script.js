
// PROMISE :- 

    // 2 condition ==> successfull ==> fail

    // fetch(https:restcountries.eu/rest/v2/name/nepal)

    // data milega ==> sab kuch shi h
    // ya data nhi milega ==> internet error, ya server error

    // fullfilled
    // reject

    // 90% promise comsumed krte h na ki create

    const joke = document.querySelector("#joke")
    const jokeBtn = document.querySelector("#jokeBtn")


    // const generateJokes = () => {

    //     const setHeader = {
    //         headers : {
    //             Accept : "application/json"
    //         }
    //     }

    //     fetch('https://icanhazdadjoke.com', setHeader)
    //     .then((res) => res.json())
    //     .then((data) =>
    //         joke.innerHTML = data.joke
    //     ).catch((error) => 
    //         console.log(error)
    //     )
    // }


    // Convert into Async- await with data Handling :- 

    const generateJokes = async () => {

        try{
            const setHeader = {
                headers : {
                    Accept : "application/json"
                }
            }
        
            const res = await fetch('https://icanhazdadjoke.com', setHeader)
            const data = await res.json()
            joke.innerHTML = data.joke
        
        }catch(error){
            console.log(`The error is ${error}`)
        }
    }

    


    jokeBtn.addEventListener('click', generateJokes)
    generateJokes()