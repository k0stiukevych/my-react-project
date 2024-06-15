import clsx from "clsx";
// import "./Alert.css";
import css from "./Alert.module.css";

export const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx(css[variant], {
        [css.isOutlined]: outlined,
        [css.isElevated]: elevated,
      })}
    >
      {children}
    </p>
  );
};

// ---------------------

// export const Alert = ({ variant, outlined, elevated, children }) => {
//   return (
//     <p
//       className={clsx("alert", variant, {
//         "is-outlined": outlined,
//         "is-elevated": elevated,
//       })}
//     >
//       {children}
//     </p>
//   );
// };

// ------------------------

// export const Alert = ({ variant, outlined, elevated, children }) => {
//   return (
//     <p
//       className={clsx(
//         "alert",
//         variant,
//         outlined && "is-outlined",
//         elevated && "is-elevated"
//       )}
//     >
//       {children}
//     </p>
//   );
// };

// --------------------

// export const Alert = ({ variant, outlined, elevated, children }) => {
//   const classNames = ["alert", variant,];

//   if (outlined) {
//     classNames.push("is-outlined");
//   }

//   if (elevated) {
//     classNames.push("is-elevated");
//   }

//   return <p className={classNames.join(" ")}>{children}</p>;
// };
