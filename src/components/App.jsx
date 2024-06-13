// src/App.jsx
import { Fragment } from "react";
import Product from "./Product";
import Mailbox from "./Mailbox";
import Map from "./BookList";

// export default function App() {
//   return (
//     <>
//       <h1>Products</h1>

//       <Product />
//       <Product />
//       <Product />
//     </>
//   );
// }

export default function App() {
  return (
    <>
      <h1>Best selling</h1>

      <Product name="Tacos With Lime" price={10.99} />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />

      <Mailbox />

      <Map />
    </>
  );
}