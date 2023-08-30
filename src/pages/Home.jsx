import { useNavigate } from "react-router-dom";
import WithUser from "../component/WithUser";

function Home({ user, logOut }) {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <div>
        <h1>This is home page{user.email}</h1>
        <div>
          <button
            onClick={handleLogout}
            className="bg-black text-white w-36 rounded-sm"
          >
            logout
          </button>
        </div>
      </div>
    </div>
  );
}
export default WithUser(Home);
