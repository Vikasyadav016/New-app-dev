import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Dashboard from "./Pages/Dashboard/Dashboard";
import UserDefaultLayout from "./RoleBasedSidebarLayout/User-Citizen/UserDefaultLayout";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>

        <Route path="/dashboard" element={<Dashboard />}>
          {/* <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Setting />} />
          <Route path="new-registration" element={<RegistrationPage />} /> */}
        </Route>
         <Route path="/user-dashboard" element={<UserDefaultLayout />}>
    {/* <Route index element={<UserDashboard />} />
    <Route path="profile" element={<UserProfile />} /> */}
   
  </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;