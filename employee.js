const axios = require('axios');

let todoPromise = axios.get("http://localhost:3000/employee", { timeout: 2000 });

todoPromise.then((response) => {
    console.log(response.data);

    console.log(response.status);

    console.log(response.statusText);

})

    .catch((error) => {

        if (error.response) {

            console.log(error.response.status);

            console.log(error.response.statusText);

        }

        else if (error.request) {

            console.log(error.request.status);

        }

        else {

            console.error("Error ->" + error.message);

        }

    })

    .finally(() => {

        console.log("Fetch completed")

    })



let getTodo = async () => {

    try {

        let promisedResponse = await axios.get("http://localhost:3000/employee/28456");

        console.log(promisedResponse.data);

    }

    catch (error) {

        console.log("Error ->" + error);

    }

}

getTodo();