import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import { useHistory } from "react-router-dom";

const postData = (activity, history, setError) => {
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
      if (res.status !== 400) {
        // useHistory provides a minimal API that lets you navigate state, in this case I used it instead of Link!
        history.push("/");
      } else {
        setError("Something went wrong... sorry!");
      }
    })
    .catch((e) => {
      console.error(e);
      setError("Something went wrong... sorry!");
    });
};

const ChooseYourOwnAdventure = ({ setActivity }) => (
  <>
    <h2 className="container">Choose Your Adventure</h2>
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5cd493f1185add0001e4670d/1558988155986-PY602J3JHUN77WUMVRXS/ke17ZwdGBToddI8pDm48kFyD7pzB8zoMIVY5aiUuFlp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0jG2lbcDYBOeMi4OFSYem8DMb5PTLoEDdB05UqhYu-xbnSznFxIRsaAU-3g5IaylIg/image-asset.jpeg?format=2500w"
            rounded
            className="image-pick-activity"
            onClick={() => setActivity("5 pushups")}
          />
       
          <Image
            src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/08/14210638/sharpei-puppies-playing-in-grass.jpg"
            rounded
            className="image-pick-activity"
            onClick={() => setActivity("15 situps")}
          />
          <Image
            src="https://www.soniamphotography.com/wp-content/uploads/2015/07/Cavoodle-puppy-1.jpg"
            rounded
            className="image-pick-activity"
            onClick={() => setActivity("5 squats")}
          />
        </Col>
      </Row>
    </Container>
  </>
);

// the string that images is setting upon clicking one
const DoingActivity = ({ activity }) => {
  const [error, setError] = useState("");
  const history = useHistory();
  console.log({ error });
  return (
    <div className="container">
      <h4>Your Doing {activity}!</h4>
      <div>
        <Spinner animation="border" variant="info" />
      </div>
      <h4>When your done, click here!</h4>
      <Button onClick={() => postData(activity, history, setError)}>
        Post
      </Button>
      {error && <div>{error}</div>}
    </div>
  );
};

// if activity is an empty "", return my og options page
// else return the user is doing the activity page
// setActivity is setting the state of whatever activity the user clicked, and doing is that activity
const Options = () => {
  const [activity, setActivity] = useState("");

  if (activity === "") {
    return <ChooseYourOwnAdventure setActivity={setActivity} />;
  }
  return <DoingActivity activity={activity} />;
};
export default Options;
