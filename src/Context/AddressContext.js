import axios from "axios";
import { createContext } from "react";

export let AddressContext = createContext();

async function userDetails(details) {
  console.log(details);

  let oldDetails = await axios.get("http://localhost:3000/checkOutOrders");
  console.log(oldDetails.data);

  let userOldDetails = oldDetails.data.filter(
    (userdetails) => userdetails.token === localStorage.userToken
  );

  if (userOldDetails.length !== 0) {
    console.log(userOldDetails);

    return await axios({
      method: "put",
      url: `http://localhost:3000/checkOutOrders/${userOldDetails[0].id}`,
      data: {
        token: localStorage.getItem("userToken"),
        shippingCartDetails: details,
      },
    });
  } else {
    return await axios({
      method: "post",
      url: "http://localhost:3000/checkOutOrders",
      data: {
        token: localStorage.getItem("userToken"),
        shippingCartDetails: details,
      },
    });
  }
}
export default function AddressContextProvider(props) {
  return (
    <AddressContext.Provider value={{ userDetails }}>
      {props.children}
    </AddressContext.Provider>
  );
}
