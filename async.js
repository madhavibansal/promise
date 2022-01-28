const axios=require('axios')
async function getactivity(){
    try{
let response=await axios.get('https://www.boredapi.com/api/activity')
console.log(`you could ${response.data.activity}`)
    }catch(error){
        console.log(`ERROR: ${error}`)
    }
}
getactivity()