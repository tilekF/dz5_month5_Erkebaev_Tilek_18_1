import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserListPage from "./pages/userListPage/UserListPage";
import GetUser from "./component/getUser/GetUser";

function App() {
  return (
      <BrowserRouter>
        <GetUser/>
        <Routes>
          <Route index element={<UserListPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;