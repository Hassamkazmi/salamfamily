import React from "react";
import Fade from "react-reveal/Fade";
import ReadMoreReact from "read-more-react";
import data from "../Data";

const Environment = () => {
  return (
    <React.Fragment>
      <Fade bottom>
        <div className="section features">
          {data.Environment.map((item, index) => (
            <>
              <h3>{item.title}</h3>
              <ReadMoreReact
                text={item.description}
                min={200}
                ideal={220}
                max={400}
                readMoreText="read more"
              />
            </>
          ))}
        </div>
      </Fade>
    </React.Fragment>
  );
};
export default Environment;
