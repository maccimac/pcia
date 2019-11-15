const API = "http://localhost:8000/data"

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

export const verifyMember = (memberId, year) =>{
  return fetch(`${API}/verifyMember/${memberId}/${year}`, {
    method: "PUT",
    headers:{
      Accept: 'application/json',
      "Content-Type" : "application/json",
    },
    body:{
      years: `${year}`
    },
    profile: {
      _id: `${memberId}`
    }
  }

)
  .then(response =>{
      return response.json();
    })
    .catch(err =>{
      console.log(err)
    })


}
