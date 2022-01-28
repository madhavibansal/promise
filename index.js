const axios = require('axios')
axios.get('https://www.boredapi.com/api/activity').then(Response => {
    console.log(`you could ${Response.data.activity}`)
}).catch(error => {
    console.log(`ERROR! ${error}`)
})
console.log("why i am here")