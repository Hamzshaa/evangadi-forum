import React, { useCallback, useEffect } from "react";
import Routing from "./components/Routing/Routing";

function App() {
  const currentPath = window.location.pathname;

  const checkUser = useCallback(async () => {
    try {
      const { data } = await axios.get("/users/check", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      setUser(data);
    } catch (error) {
      console.log(error);
    }
  }, [currentPath]);

  useEffect(() => {
    checkUser();
  }, [checkUser]);

  return (
    <>
      <Routing />
    </>
  );
}

export default App;
