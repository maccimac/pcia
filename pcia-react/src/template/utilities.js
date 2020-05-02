import React, { useState, useEffect, Fragment} from 'react';

export const showLoader = (condition) => {
    if(condition){
      return ""
    }else{
      return <Fragment><div className='lds-ripple'><div></div><div></div></div></Fragment>
    }
}
