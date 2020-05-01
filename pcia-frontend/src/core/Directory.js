import React, { useState, useEffect, Fragment, fs} from 'react';
import { Link } from 'react-router-dom';
import Template from '../template';
import MemberCard from '../template/MemberCard';
import { getMembers, findMember, getIndType } from '../admin/adminApi'

const Directory = ( ) => {
  const [allMembers, setAllMembers ] = useState([])
  const [indVals, setIndVals] = useState([]);

  const listAll = () =>{
    getMembers()
    .then(data=>{
      if(data.error){
        console.log( data)
      }else{
        setAllMembers(data)
      }
    });

    getIndType().then(data=>{
      if(data.error){
        console.log( data)
      }else{
        setIndVals(data)
      }
    })
  }

  useEffect(()=>{
    listAll();
  },[])



  const filters = () =>{
    const newSearch = (query) =>{
      console.log("query: ", query);
      findMember(query).then(
        data => {
          if(data.error){
            console.log( data)
          }else{
            setAllMembers(data)
          }
        }
      )

    }

    return(
      <div className="row">
        <div className="col-sm-2">
          <button
            className="btn btn-lg w-100"
            onClick={
              ()=>{
                newSearch({})
              }
            }
            >Show All</button>
        </div>
        <div className="col-sm-4">
          <select
            class="form-control"
            id="exampleFormControlSelect1"
            onChange={
              e =>{
                let thisQuery ={};
                if(e.target.value !== "All"){
                  thisQuery ={
                    industrytype: e.target.value
                  };
                };
                newSearch(thisQuery);
              }

            }
          >
            <option value="All">All</option>
            {indVals.map((ind, i) => {
              return (
                <option
                  key={i}
                  value={ind}
                  >
                  {ind}
                </option>
              );
            })}
          </select>

        </div>
        <div className="col-sm-3">
          <select
            class="form-control"
            id="exampleFormControlSelect1"
            onChange={
              e =>{
                let thisQuery ={};
                if(e.target.value !== "All"){
                  thisQuery ={
                      membershiptype: e.target.value
                    }
                  };
                  newSearch(thisQuery);
                }
              }

          >
            <option value="All">All</option>
            <option value="Corporate">Corporate</option>
            <option value="Individual">Individual</option>

          </select>

        </div>
      </div>
    )

  }


  return (
  <Template
    header={{title: "Directory"}}
    >
    <section>
      <div className="container">

        <div className="minheight-8rem">&nbsp;</div>
        {filters()}
        <div className="row align-items-center">
          {allMembers.map(
            (member, index)=>{
              return(
                <MemberCard
                  member={member}
                  isAdmin={false}
                />
              )

            }
          )}



        </div>

        <div className="minheight-8rem">&nbsp;</div>
      </div>
    </section>


  </Template>
)}

export default Directory;
