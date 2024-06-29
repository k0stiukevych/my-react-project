// src/App.jsx
// import ClickCounter from "./ClickCounter/ClickCounter";
import { useState, useEffect } from "react";

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

// export default function App() {
//   const [values, setValues] = useState({
//     x: 0,
//     y: 0,
//   });

//   const updateX = () => {
//     setValues({
//       ...values,
//       x: values.x + 1,
//     });
//   };

//   const updateY = () => {
//     setValues({
//       ...values,
//       y: values.y + 1,
//     });
//   };

//   return (
//     <div>
//       <p>
//         x: {values.x}, y: {values.y}
//       </p>

//       <button onClick={updateX}>Update x</button>
//       <button onClick={updateY}>Update y</button>
//     </div>
//   );
// }

// ----------------------------

// export default function App() {
    // const [clicks, setClicks] = useState(0);

    // Оголошуємо ефект
    // useEffect(() => {
    //   document.title = `You clicked ${clicks} times`;
  // });
  
  // useEffect(() => {
  //   console.log("You can see me only once!");
  // }, []);

  //   return (
  //     <button onClick={() => setClicks(clicks + 1)}>
  //       You clicked {clicks} times
  //     </button>
  //   );

  //-----------------------

  // useEffect(() => {
  //   setInterval(() => {
  //     console.log(`Interval - ${Date.now()}`);
  //   }, 2000);
  // }, []);

  // return <div>App</div>;
// };
  
//-----------------------------

// const Modal = () => {
  // useEffect(() => {
  //   setInterval(() => {
  //     console.log(`Interval - ${Date.now()}`);
  //   }, 2000);
  // }, []);

  // return <div>Modal</div>;

  //------

//   useEffect(() => {
//     // Зберігаємо ідентифікатор інтервалу в змінну
//     const intervalId = setInterval(() => {
//       console.log(`Interval - ${Date.now()}`);
//     }, 2000);

//     return () => {
//       // Очищаємо інтервал за його ідентифікатором
//       clearInterval(intervalId);
//     };
//   }, []);

//   return <div>Modal</div>;
// };

// export default function App () {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? "Close" : "Open"}
//       </button>
//       {isOpen && <Modal />}
//     </div>
//   );
// };

// export default function App() { 
  // const [clicks, setClicks] = useState(0);

	// // ❌ Ефект записаний з помилкою!
  // useEffect(() => {
  //   console.log("Clicks updated: ", clicks);
  // }, []);

  // return (
  //   <button onClick={() => setClicks(clicks + 1)}>
  //     You clicked {clicks} times
  //   </button>
  // );

//   const [clicks, setClicks] = useState(0);

//   // ✅ Залежності вказані правильно
//   useEffect(() => {
//     console.log("Clicks updated: ", clicks);
//   }, [clicks]);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// ⁡⁢⁢⁢// У компоненті можна оголошувати стільки ефектів, скільки потрібно. Це дозволяє згрупувати логіку, створивши ефект для кожної незалежної операції.
// Наприклад, додамо до компонента всі розглянуті раніше ефекти. Кожен з них виконує свою функцію, запускається відповідно до вказаних залежностей і незалежно від інших.

// export default function App() {
  // const [clicks, setClicks] = useState(0);

  // useEffect(() => {
  //   console.log("You can see me only once!");
  // }, []);

  // useEffect(() => {
  //   console.log("Clicks updated: ", clicks);
  // }, [clicks]);

  // useEffect(() => {
  //   document.title = `You clicked ${clicks} times`;
  // });

  // return (
  //   <button onClick={() => setClicks(clicks + 1)}>
  //     You clicked {clicks} times
  //   </button>
  // );

  // Коли в компоненті є кілька станів

// const [first, setFirst] = useState(0);
// const [second, setSecond] = useState(0);

// useEffect(() => {
//   console.log("First updated: ", first);
// }, [first]);

// useEffect(() => {
//   console.log("Second updated: ", second);
// }, [second]);

// useEffect(() => {
//   console.log("First or second updated: ", first + second);
// }, [first, second]);

// return (
//   <>
//     <button onClick={() => setFirst(first + 1)}>First: {first}</button>
//     <button onClick={() => setSecond(second + 1)}>Second: {second}</button>
//   </>
// );
// }

//----------------------------------------------

// export default function App() {
//   const [clicks, setClicks] = useState(0);

  // useEffect(() => {
  //   console.log(`Clicks changed - ${clicks}`);
  // }, [clicks]);

//   useEffect(() => {
//     window.localStorage.setItem("saved-clicks", JSON.stringify({clicks}));
//   }, [clicks]);

//   return (
//     <div>
//       <button onClick={() => setClicks(clicks + 1)}>
//         You clicked {clicks} times
//       </button>
//       <button onClick={() => setClicks(0)}>Reset</button>
//     </div>
//   );
// };

// Ось повний код прикладу, в якому ми зберігаємо значення стану clicks в локальному сховищі.

export default function App() { 
  const [clicks, setClicks] = useState(() => {
    const savedClicks = window.localStorage.getItem("saved-clicks");
    if (savedClicks !== null) {
      return savedClicks;
    }
    return 0;
  });

  useEffect(() => {
    window.localStorage.setItem("saved-clicks", clicks);
  }, [clicks]);

  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>
        You clicked {clicks} times
      </button>
      <button onClick={() => setClicks(0)}>Reset</button>
    </div>
  );
}