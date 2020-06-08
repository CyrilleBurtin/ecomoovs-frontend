import React from "react";
import BlueButton from "../../../shared/uiElements/BlueButton";

const UsersList = props => {
  return (
    <div style={{display: 'flex', flexFlow: 'row wrap', border: '1px solid #999', borderTop: '0'}}>
      
      <div style={{flexBasis: '12%', margin:'0 10px 0 10px'}}>User {props.cle + 1}</div>
      <div style={{flexBasis: '12%', margin:'0 10px 0 10px'}}>{props.user.firstname}</div>
      <div style={{flexBasis: '12%', margin:'0 10px 0 10px'}}>{props.user.lastname}</div>
      <div style={{flexBasis: '12%', margin:'0 10px 0 10px'}}>{props.user.location.city}</div>
      <BlueButton>Voir +</BlueButton>
  
    </div>
  );
};

export default UsersList;
