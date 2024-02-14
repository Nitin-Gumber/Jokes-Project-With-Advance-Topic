    "use strick"
    
    const joke = document.querySelector("#joke")
    const jokeBtn = document.querySelector("#jokeBtn")
 
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