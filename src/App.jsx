import LoginPage from "./pages/LoginPage";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserContextProvider from "./Context/UserContextProvider";
import AuthRoute from "./Routers/AuthRoute";
import UserRoute from "./Routers/UserRoute";

function App() {
  return (
    <div>
      <UserContextProvider>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </UserContextProvider>
    </div>
  );
}
export default App;
