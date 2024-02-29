import React, { useEffect, useState } from "react";

const GithubUser = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://api.github.com/users/hiteshchoudhary")
      .then((response) => response.json())
      .then((response) => setData(response[data]));
  }, []);
  return (
    <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl rounded-md">
      Github Followers: {data.followers_url}
    </div>
  );
};

export default GithubUser;
