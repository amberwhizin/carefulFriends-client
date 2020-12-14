import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ChooseYourOwnAdventure = ({ setActivity }) => (
  <div className="container">
    <h2>Choose Your Adventure</h2>
    <form>
      <div className="centered">
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5cd493f1185add0001e4670d/1558988155986-PY602J3JHUN77WUMVRXS/ke17ZwdGBToddI8pDm48kFyD7pzB8zoMIVY5aiUuFlp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0jG2lbcDYBOeMi4OFSYem8DMb5PTLoEDdB05UqhYu-xbnSznFxIRsaAU-3g5IaylIg/image-asset.jpeg?format=2500w"
                roundedCircle
                className="image-pick-activity"
                onClick={() => setActivity("5 pushups")}
              />
              <Image
                src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/08/14210638/sharpei-puppies-playing-in-grass.jpg"
                roundedCircle
                className="image-pick-activity"
                onClick={() => setActivity("15 situps")}
              />
              <Image
                src="https://www.soniamphotography.com/wp-content/uploads/2015/07/Cavoodle-puppy-1.jpg"
                roundedCircle
                className="image-pick-activity"
                onClick={() => setActivity("5 squats")}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </form>
  </div>
);

const DoingActivity = ({ activity }) => {
  return <div>{activity}</div>;
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
