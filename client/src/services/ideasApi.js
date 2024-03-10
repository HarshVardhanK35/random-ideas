import axios from 'axios'

const apiUrl = '/api/ideas';

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

function updateIdea(id, data){
  return axios.put(`${apiUrl}/${id}`, data)
}

function deleteIdea(id){
  const username = localStorage.getItem('username') ? localStorage.getItem('username') : ""
  return axios.delete(`${apiUrl}/${id}`, {
    data: {
      username: username
    }
  })
}

const ideasApiFunctions = {
  getIdeas,
  createIdea,
  updateIdea,
  deleteIdea
}
export default ideasApiFunctions;