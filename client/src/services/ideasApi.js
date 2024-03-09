import axios from 'axios'

const apiUrl = 'http://localhost:5000/api/ideas';

// GET Ideas Method
async function getIdeas(){
  try{
    const res = await axios.get(apiUrl);
    return (res.data.data)
  }
  catch(err){
    console.log(err)
  }
}

function createIdea(data){
  return axios.post(apiUrl, data)
}

const ideasApiFunctions = {
  getIdeas,
  createIdea
}

export default ideasApiFunctions;