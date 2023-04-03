import React,{useContext} from "react";
import DropDownButton from "../../components/ui/DropDownButton";
import { userContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
export default function NavBarDropDown() {

  const { user, setUser } = useContext(userContext);
  const logout=()=>{
    toast.success('user logged out');
    setUser("");
  }
  return (
    <DropDownButton btnText="User">
      {!user && (
        <>
          <h1>
            <Link to="/signIn">SignIn</Link>
          </h1>
          <h2>
            <Link to="/signUp">SignUp</Link>
          </h2>
        </>
      )}
      {user && <h2 className="logout" onClick={logout}>Logout</h2>}
    </DropDownButton>
  );
}
