import { createContext, useEffect } from "react";
import { useState } from "react";

export const StateContext = createContext();
function StateContextProvider({ children }) {
  const [time, setTime] = useState(25 * 60);
  const [rest, setRest] = useState(5 * 60);
  const [session, setSession] = useState(time);
  const [isActive, setIsActive] = useState(false);
  const [isActiveTag, setIsActiveTag] = useState(0);

  useEffect(() => {
    switch (isActiveTag) {
      case 0:
        setTime(session);

        break;
      case 1:
        setTime(rest);

        break;

      default:
        break;
    }
  }, [isActiveTag]);
  return (
    <StateContext.Provider
      value={{
        time,
        setTime,
        rest,
        setRest,
        setIsActive,
        isActive,
        isActiveTag,
        setIsActiveTag,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export default StateContextProvider;
