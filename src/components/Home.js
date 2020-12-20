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
import { FaRegCommentDots, FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import axios from "axios";

const Comment = ({
  activitiesComment,
  deleteComment,
  index,
  activity,
  getData,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingComment, setEditingComment] = useState(activitiesComment.text);
  const updateComment = (e) => {
    e.preventDefault();
    axios
      .put(
        "https://carefulfriends-api.herokuapp.com/comment/" +
          activitiesComment._id,
        {
          text: editingComment,
          _activityId: activity._id,
        }
      )
      .then((res) => {
        getData();
        setIsEditing(false);
      })
      .catch((error) => {
        setIsEditing(false);
        console.log(error);
      });
  };
  if (!isEditing) {
    return (
      <ListGroup.Item key={activitiesComment._id}>
        <div>{activitiesComment.text}</div>
        <div>- {activitiesComment.owner}</div>
        <FaRegTrashAlt
          id="trash"
          className="ml-auto"
          onClick={() => deleteComment(index)}
        />
        <FaRegEdit
          id="trash"
          className="ml-auto"
          onClick={() => setIsEditing(true)}
        />
      </ListGroup.Item>
    );
  }
  return (
    <Form onSubmit={updateComment}>
      <InputGroup className="mb-2 mr-sm-2">
        <FormControl
          placeholder="Update comment"
          value={editingComment}
          onChange={(e) => setEditingComment(e.target.value)}
        />
      </InputGroup>
    </Form>
  );
};

const ActivityCard = ({ activity, getData }) => {
  const [isCommenting, setIsCommenting] = useState(false);
  const [comment, setComment] = useState("");
  const createComment = (e) => {
    e.preventDefault();
    axios
      .post("https://carefulfriends-api.herokuapp.com/comment", {
        text: comment,
        _activityId: activity._id,
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
  const deleteComment = (index) => {
    const userComments = activity.comments.filter((i) => {
      return i !== index;
    });
    const currentItem = userComments[index];
    axios
      .delete(
        "https://carefulfriends-api.herokuapp.com/comment/" + currentItem._id,
        {
          text: comment,
          _activityId: activity._id,
        }
      )
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
          {activity.comments.map((activitiesComment, i) => (
            <Comment
              activitiesComment={activitiesComment}
              deleteComment={deleteComment}
              activity={activity}
              getData={getData}
              index={i}
            />
          ))}
        </ListGroup>
        {!isCommenting && (
          <Button
            className="icon-comment"
            onClick={() => setIsCommenting(true)}
          >
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
  const history = useHistory();

  useEffect(() => {
    console.log("in activity room");
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://carefulfriends-api.herokuapp.com/activities", {
        withCredentials: true,
      })
      .then(({ data }) => {
        console.log({ data });
        if (data.error) {
          history.push("/login");
        } else {
          setActivitiesList(data);
        }
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className="center-container">
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
    </div>
  );
};

export default Home;
