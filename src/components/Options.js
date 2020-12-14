import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Options = () => {
  return (
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
                  />
                <Image
                  src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/08/14210638/sharpei-puppies-playing-in-grass.jpg"
                  roundedCircle
                  className="image-pick-activity"
                />
                <Image
                  src="https://www.soniamphotography.com/wp-content/uploads/2015/07/Cavoodle-puppy-1.jpg"
                  roundedCircle
                  className="image-pick-activity"
                />
              </Col>
            </Row>
          </Container>
        </div>
      </form>
    </div>
  );
};
export default Options;
