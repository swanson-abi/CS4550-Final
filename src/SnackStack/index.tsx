import { Route, Routes, Navigate } from "react-router";
import Account from "./Account";

import SnackStackNavigation from "./navigation";
import Dashboard from "./Dashboard";
import CookBooks from "./CookBooks";

function SnackStack() {
  return (
    <div className="d-flex">
      <SnackStackNavigation />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<Account />} />
          <Route path="Dashboard" element={<Dashboard courses={[]} course={undefined} setCourse={function (course: any): void {
                      throw new Error("Function not implemented.");
                  } } addNewCourse={function (): void {
                      throw new Error("Function not implemented.");
                  } } deleteCourse={function (course: any): void {
                      throw new Error("Function not implemented.");
                  } } updateCourse={function (): void {
                      throw new Error("Function not implemented.");
                  } } />} />
          <Route path="Cookbooks" element={<CookBooks />} />
          <Route path="Calendar" element={<h1>Calendar</h1>} />
        </Routes>
      </div>
    </div>
  );
}
export default SnackStack;