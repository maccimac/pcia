// const API = "http://localhost:8000/data"
// const API = "http://localhost:8000/data"
const API = "https://afternoon-journey-31096.herokuapp.com/data"

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

export const getOneMember = (memberId) =>{
  return fetch(`${API}/getOneMember/${memberId}`, {
    method: "GET"
  })
  .then(response => {
    console.log(response)
    return response.json();
  })
  .catch( err => {
    console.log(err)
  })
}


export const verifyMember = (memberId, year) => {
  const newBody ={
    years: year,
    _id: memberId
  }
  return fetch(`${API}/verifyMember`, {
    method: "PUT",
    headers:{
      Accept: 'application/json',
      "Content-Type" : "application/json",
    },
    body:JSON.stringify(newBody),
    profile: {
      "_id": `${memberId}`
    }
  }
)
  .then(response =>{
      console.log(response);
      return response.json();
    })
    .catch(err =>{
      console.log(err)
    })
}

export const updateMember = (memberBody) => {

  return fetch(`${API}/updateMember`, {
    method: "PUT",
    headers:{
      Accept: 'application/json',
      "Content-Type" : "application/json",
    },
    body:JSON.stringify(memberBody)
  }
)
  .then(response =>{
      return response.json();
    })
    .catch(err =>{
      console.log(err)
    })

}


export const getIndType = () =>{
  return fetch(`${API}/industryValues`, {
    method: "GET"
  })
  .then(response => {
    console.log(response)
    return response.json();
  })
  .catch( err => {
    console.log(err)
  })
}


export const addMember = (newBody) =>{
  return fetch(`${API}/addMember`, {
    method: "POST",
    headers:{
      Accept: 'application/json',
      "Content-Type" : "application/json",
    },
    body:JSON.stringify(newBody)
  }).then(response=>{
    return response.json();
  }).catch(err=>{
    console.log(err)
  })
}

export const deleteMember = (memberId) =>{
  const newBody = {
    _id: memberId
  }
  return fetch(`${API}/deleteMember`,{
    method: 'DELETE',
    headers:{
      Accept: 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newBody)
    })
    .then(response=>{
      return response.json()
    }).catch(err=>{
      console.log(err)
    })
}


export const findMember = (searchDetails) =>{
  return fetch(`${API}/findMember`, {
    method: "POST",
    headers:{
      Accept: 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify(searchDetails)
    }
  )
  .then(response => {
    console.log(response)
    return response.json();
  })
  .catch( err => {
    console.log(err)
  })
}
