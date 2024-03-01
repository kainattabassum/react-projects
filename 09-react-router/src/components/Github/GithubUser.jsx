import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const GithubUser = () => {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/hiteshchoudhary")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //       console.log(data);
  //     });
  // }, []);
  
  return (
    <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl rounded-md flex items-center gap-2">
      <img src={data.avatar_url} alt="Git picture" width={100} />
      <h3>Github Followers: {data.followers}</h3>
    </div>
  );
};

export default GithubUser;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};
