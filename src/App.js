import React from "react";
import Customers from "./components/Customers";

const customers = [
  {
    id: 1,
    profile: "http://placeimg.com/64/64/1",
    name: "Kim",
    birthday: "980914",
    gender: "Male",
    Univ: "Soongsil Univ",
  },
  {
    id: 2,
    profile: "http://placeimg.com/64/64/2",
    name: "Lee",
    birthday: "950211",
    gender: "Female",
    Univ: "Seoul Univ",
  },
  {
    id: 3,
    profile: "http://placeimg.com/64/64/3",
    name: "Park",
    birthday: "020122",
    gender: "Male",
    Univ: "Soongsil Univ",
  },
];

function App() {
  return (
    <div>
      {customers.map((customer) => (
        <Customers
          key={customer.id}
          id={customer.id}
          profile={customer.profile}
          name={customer.name}
          birthday={customer.birthday}
          gender={customer.gender}
          Univ={customer.Univ}
        />
      ))}
    </div>
  );
}

export default App;
