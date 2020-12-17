import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from "react-bootstrap/ListGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import { Link, useHistory } from "react-router-dom";
import { FaRegCommentDots } from "react-icons/fa";

const ActivityCard = ({ activity, getData }) => {
  const [isCommenting, setIsCommenting] = useState(false);
  const [comment, setComment] = useState("");
  const createComment = (e) => {
    e.preventDefault();
    fetch("/comment", {
      method: "POST",
      body: JSON.stringify({
        text: comment,
        _activityId: activity._id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        getData();
        setComment("");
        setIsCommenting(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div key={activity._id} className="posted-activity">
      <Card
        className="shadow-sm p-3 mb-5 bg-white rounded"
        style={{
          width: "20rem",
        }}
      >
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h4>{activity.owner} did</h4>
            <h4>{activity.activityName}!</h4>
          </ListGroup.Item>
          {activity.comments.map((activitiesComment) => {
            return (
              <ListGroup.Item key={activitiesComment._id}>
                {activitiesComment.text}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
        {!isCommenting && (
          <Button onClick={() => setIsCommenting(true)}>
            <FaRegCommentDots />
          </Button>
        )}
        {isCommenting && (
          <Form onSubmit={createComment}>
            <InputGroup className="mb-2 mr-sm-2">
              <FormControl
                placeholder="Write comment"
                onChange={(e) => setComment(e.target.value)}
              />
            </InputGroup>
          </Form>
        )}
      </Card>
    </div>
  );
};

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
    <Container>
      {/* message board */}
      <h1 className="title">Community Encouragements</h1>
      <Link to="/activities">
        <Button id="start-session-button" variant="primary">
          start new session
        </Button>
      </Link>
      {activitiesList.map((activity) => {
        return (
          <ActivityCard
            activity={activity}
            key={activity._id}
            getData={getData}
          />
        );
      })}
    </Container>
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
