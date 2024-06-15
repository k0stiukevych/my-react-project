// src/App.jsx
import { Fragment } from "react";
import Product from "./Product";
import Mailbox from "./Mailbox";
import Map from "./BookList";
import { Alert } from "./Alert";
import { UserMenu } from "./Icon";


// export default function App() {
//   return (
//     <>
//       <h1>Best selling</h1>

//       <Product name="Tacos With Lime" price={10.99} />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//         price={14.29}
//       />

//       <Mailbox />

//       <Map />
//     </>
//   );
// }
// 
// 

// ------------------

export default function App() {
  return (
    <>
      <UserMenu name="Tom" />
    </>
  );
};
