import React from "react";
function Customers({ id, profile, name, birthday, gender, Univ }) {
  return (
    <div>
      <CustomerProfile id={id} profile={profile} name={name} />
      <CustomerInfo birthday={birthday} gender={gender} Univ={Univ} />
    </div>
  );
}
function CustomerProfile({ id, profile, name }) {
  return (
    <div>
      <img src={profile} alt="profile" />
      <h2>
        {name}({id})
      </h2>
    </div>
  );
}

function CustomerInfo({ birthday, gender, Univ }) {
  return (
    <div>
      <p>{birthday}</p>
      <p>{gender}</p>
      <p>{Univ}</p>
    </div>
  );
}

export default Customers;
