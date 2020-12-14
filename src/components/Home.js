import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const Home = () => {
  // const [currentUser, setCurrentUser] = useState("");
  const [activitiesList, setActivitiesList] = useState([]);
  const [activity, setActivity] = useState("");

  useEffect(() => {
    console.log("in activity room");
    getData();
  }, []);

  useEffect(() => {
    console.log("in options room");
    getOptionPage();
  }, []);

  const getData = () => {
    fetch("/activities")
      .then((data) => data.json())
      .then((parsedData) => {
        setActivitiesList(parsedData);
      })
      .catch((e) => console.error(e));
  };

  const getOptionPage = () => {
    fetch("/options")
      .then((data) => data.json())
      .then((parsedData) => {
        setActivitiesList(parsedData);
      })
      .catch((e) => console.error(e));
  };

  const postData = (e) => {
    e.preventDefault();
    if (!activity) return;
    fetch("/activities", {
      method: "POST",
      body: JSON.stringify({
        name: activity,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log({ data });
        setActivitiesList(activitiesList.concat(data));
        setActivity("");
      })
      .catch((e) => {
        console.error(e);
      });
  };
  return (
    <div className="container">
      {/* message board */}
      <h1>Welcome To Your Community</h1>

      <Link to="/options">
        <Button variant="primary">Start New Session</Button>
      </Link>
      
      <form onSubmit={postData}>
        {/* <input
          type="text"
          onChange={(e) => setActivity(e.target.value)}
          value={activity}
        /> */}
      </form>
      {/* {activitiesList.map((item) => (
        <div key={item._id}>{item.name}</div>
      ))} */}
    </div>
  );
};

export default Home;
