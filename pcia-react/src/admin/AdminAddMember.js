import React, { useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
import AdminTemplate from '../template/AdminTemplate';
import NewMember from '../core/NewMember';


const AdminAddMember = ( ) => {
  return(
    <AdminTemplate
      title="Add New Member"
      description=""
      >

    <NewMember
      isAdmin={true}
    />
    </AdminTemplate>
  )
}

export default AdminAddMember;
