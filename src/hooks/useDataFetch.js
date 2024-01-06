import { useState, useEffect } from "react";
import axios from "axios";

function useDataFetch(userName) {
  const [users, setUsers] = useState({
    data: [],
    isLoading: true,
  });
  const apiUrl = `https://api.github.com/search/users?q=${userName}&per_page=12`;

  async function fetchData() {
    try {
      setUsers((prevState) => ({ ...prevState, isLoading: true }));
      const response = await axios.get(apiUrl);
      const responseJson = await response.data.items;
      const result = responseJson.map((item) => {
        return {
          avatar: item.avatar_url,
          userName: item.login,
          id: item.id,
        };
      });

      setUsers((prevState) => ({ ...prevState, data: result }));
      setUsers((prevState) => ({ ...prevState, isLoading: false }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [apiUrl]);

  return users;
}

export default useDataFetch;
