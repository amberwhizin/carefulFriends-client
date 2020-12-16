import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useHistory } from "react-router-dom";

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
      <h1 className="title">Community Encouragements</h1>
      <Link to="/activities">
        <Button id="start-session-button" variant="primary">
          start new session
        </Button>
      </Link>
      {activitiesList.map((item) => {
        console.log(item);
        return (
          <div key={item._id} className="posted-activity">
            <Card
              className="shadow-sm p-3 mb-5 bg-white rounded"
              style={{ width: "20rem" }}
            >
              <Card.Body>
                <h4>{item.owner} did</h4>
                <h4>{item.activityName}!</h4>
              </Card.Body>
            </Card>
          </div>
        );
      })}
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
