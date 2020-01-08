const baseURL = 'http://localhost:3000/api/sightings/'

export default {
  getSightings(){
    return fetch(baseURL)
    .then(res => res.json())
  },
  postSighting(payload){
    return(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers:{'content-type': 'application/json'}
    })
    .then(res => res.json())
  },
  deleteSighting(id){
    return fetch(baseURL + id,{
      method: 'DELETE'
    })
  }
}
