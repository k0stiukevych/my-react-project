// src/App.jsx
// import ClickCounter from "./ClickCounter/ClickCounter";
import { useState } from "react";

// import Product from "./Product";
// import Mailbox from "./Mailbox";
// import Map from "./BookList";
// import { Alert } from "./Alert";
// import { UserMenu } from "./Icon";

// export default function App() {
//   const [clicks, setClicks] = useState(0);
//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return (
//     <>
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//     </>
//   );
// }

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

// export default function App() {
//   return (
//     <>
//       <UserMenu name="Tom" />
//     </>
//   );
// };

// export default function App() {
//   const [clicks, setClicks] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>Current: {clicks}</button>
//       <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
//       {isOpen && <p>Now you can see me!</p>}
//     </>
//   );
// };

export default function App() {
  const [values, setValues] = useState({
    x: 0,
    y: 0,
  });

  const updateX = () => {
    setValues({
      ...values,
      x: values.x + 1,
    });
  };

  const updateY = () => {
    setValues({
      ...values,
      y: values.y + 1,
    });
  };

  return (
    <div>
      <p>
        x: {values.x}, y: {values.y}
      </p>

      <button onClick={updateX}>Update x</button>
      <button onClick={updateY}>Update y</button>
    </div>
  );
}
