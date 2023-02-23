import React from "react";
import Fade from "react-reveal/Fade";
import ReadMoreReact from "read-more-react";
import data from "../Data";

const AboutSection = () => {
  return (
    <React.Fragment>
      <Fade bottom>
        <div className="section features">
          {data.About.map((item, index) => (
            <>
              <h3>{item.title}</h3>
              <ReadMoreReact
                text={item.description}
                min={100}
                ideal={120}
                max={300}
                readMoreText="read more"
              />
            </>
          ))}
        </div>
      </Fade>
    </React.Fragment>
  );
};
export default AboutSection;
