import { Route, Routes, Navigate } from "react-router";
import Account from "./Account";
import "./styles.css"
import SnackStackNavigation from "./navigation";
import Dashboard from "./Dashboard";
import CookBooks from "./CookBooks";
import * as userClient from "./Account/client";
import * as cookbookClient from "./CookBooks/client";
import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";

function SnackStack() {
  const [cookbooks, setCookbooks] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchCookbooks = async () => {
    try {
      const cookbooks = await userClient.findMyCookbooks();
      setCookbooks(cookbooks);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCookbooks();
  }, [currentUser]);

  const [cookbook, setCookbook] = useState<any>({
    _id: "1234", title: "New CookBook", Author: "New Author",
    description: "New Description",
  });
  const addNewCookbook = async () => {
    const newCookbook = await userClient.createCookBook(cookbook);
    setCookbooks([...cookbooks, newCookbook]);
  };
  const deleteCookbook = async (cookbookId: string) => {
    const status = await cookbookClient.deleteCookbook(cookbookId);
    setCookbooks(cookbooks.filter((cookbook) => cookbook._id !== cookbookId));
  };
  const updateCookbook = async () => {
    await cookbookClient.updateCookbook(cookbook);
    setCookbooks(
      cookbooks.map((c) => {
        if (c._id === cookbook._id) {
          return cookbook;
        } else {
          return c;
        }
      })
    );
  };
  return (
    <div className="d-flex">
      <SnackStackNavigation />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<Account />} />
          <Route path="Dashboard" element={
            <Dashboard
              cookbooks={cookbooks}
              cookbook={cookbook}
              setCookbook={setCookbook}
              addNewCookbook={addNewCookbook} 
              deleteCookbook={deleteCookbook}
              updateCookbook={updateCookbook} />} />
          <Route path="Cookbooks" element={<CookBooks />} />
          <Route path="Calendar" element={<h1>Calendar</h1>} />
        </Routes>
      </div>
    </div>
  );
}
export default SnackStack;