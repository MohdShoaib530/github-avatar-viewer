import { useState, useEffect } from "react";
import axios from "axios";

function useDataFetch(userName) {
  const [users, setUsers] = useState({
    data: [],
  });
  const apiUrl = `https://api.github.com/search/users?q=${userName}&per_page=12`;

  async function fetchData() {
    try {
      const response = await axios.get(apiUrl);
      const responseJson = await response.data.items;
      console.log("responseJson", responseJson);
      const result = responseJson.map((item) => {
        return {
          avatar: item.avatar_url,
          userName: item.login,
          id: item.id,
        };
      });
      console.log("result", result);

      setUsers({ data: result });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  console.log("users", users.data);

  useEffect(() => {
    fetchData();
  }, [apiUrl]);

  return users;
}

export default useDataFetch;
