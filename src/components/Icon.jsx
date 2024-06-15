import { HiUser } from "react-icons/hi";
import "./Icon.css";

export const UserMenu = ({ name }) => {
  return (
    <div className="cont">
      <p className="my-icon">
        <HiUser className="my-icon" size="24" /> {name}
      </p>
      <p>Hello</p>
    </div>
  );
};
