const API = "http://localhost:27018/data"

export const getMembers = () =>{
  return fetch(`${API}/getMembers`, {
    method: "GET"
  })
  .then(response => {
    return response.json();
  })
  .catch( err => {
    console.log(err)
  })
}
