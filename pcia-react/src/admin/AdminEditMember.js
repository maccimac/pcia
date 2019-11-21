import React, { useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
import AdminTemplate from '../template/AdminTemplate';
import EditMember from '../core/EditMember';


const AdminEditMember = (props) => {
  const memberId = props.match.params.memberId;

  return(
    <AdminTemplate
      title="Edit Member"
      description=""
      >
        MemberId: {memberId}
      {/* {JSON.stringify(props)} */}
      <EditMember isAdmin={true} memberId={memberId} />

    </AdminTemplate>
  )
}

export default AdminEditMember;
