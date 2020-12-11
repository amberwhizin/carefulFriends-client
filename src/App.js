import React, { useEffect, useState } from "react";

const App = () => {
  //const [hasErrors, setErrors] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [activitiesList, setActivitiesList] = useState([]);
  const [activity, setActivity] = useState("");

  useEffect(() => {
    console.log("in activity room");
    fetch("/activities")
      .then((data) => data.json())
      .then((parsedData) => {
        setActivitiesList(parsedData);
      })
      .catch((e) => console.error(e));
  }, []);

  const postData = (e) => {
    e.preventDefault();
    if (!activity) {
      return null;
    }
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
        setActivitiesList(activitiesList.concat(activity));
      })
      .catch((e) => {
        console.error(e);
      });
  };

  console.log({ activitiesList });
  return (
    <div className="container-fullwidth">
      <h1>Current Activity</h1>
      {activitiesList.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
      <form onSubmit={postData}>
        <input
          type="text"
          onChange={(e) => setActivity(e.target.value)}
          value={activity}
        />
        <input type="submit" value="POST" />
      </form>
    </div>
  );
};

export default App;
