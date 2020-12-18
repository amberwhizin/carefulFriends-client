import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Spinner from "react-bootstrap/Spinner";
import { useHistory } from "react-router-dom";

const postData = (activity, history, setError) => {
  if (!activity) return;
  fetch("https://carefulfriends-api.herokuapp.com/activities", {
    method: "POST",
    body: JSON.stringify({
      activityName: activity,
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
  <div className="center-container">
    <div className="image-container">
      <h1 className="image-text">5 Push-Ups</h1>
      <Image
        src="https://images.squarespace-cdn.com/content/v1/5cd493f1185add0001e4670d/1558988155986-PY602J3JHUN77WUMVRXS/ke17ZwdGBToddI8pDm48kFyD7pzB8zoMIVY5aiUuFlp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0jG2lbcDYBOeMi4OFSYem8DMb5PTLoEDdB05UqhYu-xbnSznFxIRsaAU-3g5IaylIg/image-asset.jpeg?format=2500w"
        roundedCircle
        className="background-image"
        onClick={() => setActivity("5 Push-Ups")}
      />
    </div>
    <div className="image-container">
      <h1 className="image-text">15 Sit-Ups</h1>
      <Image
        src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/08/14210638/sharpei-puppies-playing-in-grass.jpg"
        roundedCircle
        className="background-image"
        onClick={() => setActivity("15 Sit-Ups")}
      />
    </div>
    <div className="image-container">
      <h1 className="image-text">5 Squats</h1>
      <Image
        src="https://www.soniamphotography.com/wp-content/uploads/2015/07/Cavoodle-puppy-1.jpg"
        roundedCircle
        className="background-image"
        onClick={() => setActivity("5 Squats")}
      />
    </div>
    <div className="image-container">
      <h1 className="image-text">1 Minute Staff Pose</h1>
      <Image
        src="https://images.squarespace-cdn.com/content/v1/51b7a898e4b0b8b55c75f09c/1594773937236-8FYWYZZD1CC8QYYLJVQX/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Leia-Teaser.jpg?format=1000w"
        roundedCircle
        className="background-image"
        onClick={() => setActivity("1 Minute Staff Pose")}
      />
    </div>
    <div className="image-container">
      <h1 className="image-text">5 Pull-Ups</h1>
      <Image
        src="https://images.squarespace-cdn.com/content/v1/53398410e4b023798e49a6f5/1595282008282-G0I1AHQ67EUWSVNMVG4L/ke17ZwdGBToddI8pDm48kGXoD000J7kx3NE7W-LXpdwUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcSHIBb6yNmvYkAyvF3loIw6LWPhmq3jJqr-f9nvyP7bW--NA7--1aw0mnW_uWXk87/Beagle-Dog-Runs-In-Garden-with-toy-2.jpg?format=2500w"
        roundedCircle
        className="background-image"
        onClick={() => setActivity("5 Pull-Ups")}
      />
    </div>
    <div className="image-container">
      <h1 className="image-text">3 Minutes of Quiet</h1>
      <Image
        src="https://www.allthingsdogs.com/wp-content/uploads/2020/10/Brown-Long-Haired-Dachshund-Close-Up.jpg"
        roundedCircle
        className="background-image"
        onClick={() => setActivity("3 Minutes of Quiet")}
      />
    </div>
  </div>
);

// the string that images is setting upon clicking one
const DoingActivity = ({ activity }) => {
  const [error, setError] = useState("");
  const history = useHistory();
  console.log({ error });
  return (
    <div className="center-container">
      <h4 className="pre-post-activity">Your Doing {activity}!</h4>

      <Spinner animation="border" variant="info" />

      <h4 className="pre-post-activity">Click here when your done!</h4>
      <Button
        id="post-button"
        onClick={() => postData(activity, history, setError)}
      >
        Post
      </Button>
      {error && <div>{error}</div>}
    </div>
  );
};

// if activity is an empty "", return my og options page
// else return the user is doing the activity page
// setActivity is setting the state of whatever activity the user clicked, and doing is that activity
const Activities = () => {
  const [activity, setActivity] = useState("");

  if (activity === "") {
    return <ChooseYourOwnAdventure setActivity={setActivity} />;
  }
  return <DoingActivity activity={activity} />;
};
export default Activities;
