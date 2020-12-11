import React, { useEffect, useState } from "react";

const App = () => {
  //const [hasErrors, setErrors] = useState(false);
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    fetch("/activities", {
      method: "POST",
      body: JSON.stringify({
        activity,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log({ res });
        return res.json();
      })
      .then((data) => {
        console.log({ data });
        setActivity({ data });
      })
      .catch((data) => {
        setActivity(data);
      });

    // get
    fetch("/activities", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((parsedData) => setActivity({ activity: parsedData }));
  }, []);

  return (
    <div className="container-fullwidth">
      <h1>Current Activity {JSON.stringify(activity)}</h1>
    </div>
  );
};

export default App;
