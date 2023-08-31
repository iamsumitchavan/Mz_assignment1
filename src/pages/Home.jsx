import { Navigate } from "react-router-dom";
import WithUser from "../component/WithUser";
import { useContext, useEffect } from "react";
import { StateContext } from "../Context/StateContextProvider";
import { CiPause1 } from "react-icons/ci";
import { SlControlStart } from "react-icons/sl";
import { VscDebugRestart } from "react-icons/vsc";
import getTime from "../component/GetTime";

function Home({ user, logOut }) {
  const { setTime, time, isActive, setIsActive, isActiveTag, setIsActiveTag } =
    useContext(StateContext);
  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (isActive && time > 0) {
      let Interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
      return () => clearInterval(Interval);
    }
  }, [time, isActive]);

  function handleToggle() {
    setIsActive(!isActive);
  }

  function handleRestart() {
    isActiveTag == 0 ? setTime(25 * 60) : setTime(5 * 60);
    setIsActive(false);
  }

  const tags = ["Session Time", "Break Time"];

  if (!user) {
    return <Navigate to="/" />;
  }
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-slate-200 ">
      <div className="flex gap-3">
        {tags.map((t, i) => {
          return (
            <div key={i} className="mb-8">
              <button
                className="w-40 py-1 bg-black text-white rounded-sm text-xl font-mono "
                onClick={() => {
                  setIsActiveTag(i);
                }}
              >
                {t}
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <div
          className="radial-progress bg-purple-500 text-primary-content border-4 border-primary w-80 h-80 rounded-full"
          style={{ "--value": 70 }}
        >
          <div className="flex items-center h-full justify-center">
            <h1 className="text-6xl font-mono text-white font-bold">
              {getTime(time)}
            </h1>
          </div>
        </div>
        <div className="flex justify-center py-4 gap-3">
          <button
            onClick={handleToggle}
            className="p-4 bg-gray-400 rounded-full"
          >
            {isActive ? (
              <CiPause1 className="text-4xl font-bold " />
            ) : (
              <SlControlStart className="text-4xl font-bold " />
            )}
          </button>
          <button
            className="p-4 bg-gray-400 rounded-full"
            onClick={handleRestart}
          >
            <VscDebugRestart className="text-4xl font-bold" />
          </button>
        </div>
      </div>
      <div>
        <button
          onClick={handleLogout}
          className="w-40 py-1 bg-black text-white rounded-sm text-xl font-mono"
        >
          logout
        </button>
      </div>
    </div>
  );
}

export default WithUser(Home);
