import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  const [activitiesList, setActivitiesList] = useState([]);
  // const [activity, setActivity] = useState("");
  const history = useHistory();

  useEffect(() => {
    console.log("in activity room");
    getData();
  }, []);

  const getData = () => {
    fetch("/activities")
      .then((data) => data.json())
      .then((parsedData) => {
        if (parsedData.error) {
          history.push("/login");
        }
        setActivitiesList(parsedData);
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className="container">
      {/* message board */}
      <h1>Welcome To Your Community</h1>

      <Link to="/activities">
        <Button variant="primary">Start New Session</Button>
      </Link>
      {activitiesList.map((item) => (
        <div key={item._id}>{item.name}</div>
      ))}
    </div>
  );
};

export default Home;

//////////////////////////////
//////////graveyard///////////
/////////////////////////////
// {
//   /* <form onSubmit={postData}> */
// }
// {
//   /* <input
//           type="text"
//           onChange={(e) => setActivity(e.target.value)}
//           value={activity}
//         /> */
// }
// {
//   /* </form> */
// }
