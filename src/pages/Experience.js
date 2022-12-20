import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Box from "../components/Box";
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from "@material-ui/icons/Work"
import Text from "../components/Text/Index";

function Experience() {
  return (
    <Box>
      <VerticalTimeline lineColor="#e6b400">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2017"
          iconStyle={{ background: "#e6b400", color: "#fff" }}
          icon={<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title"> Central Public School, Saran, Bihar</h3>
          <Text> Intermediate </Text>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2022"
          iconStyle={{ background: "#e6b400", color: "#fff" }}
          icon={<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title"> Indian Institute of Information Technology, Una</h3>
          <h4 className="vertical-timeline-element-subtitle">Bachelor's Degree</h4>
          <Text> Computer Sceince </Text>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="March, 2022 - May, 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon/>}
        >
          <h3 className="vertical-timeline-element-title"> Front-end developer,  Woovly  (Internship)</h3>
          <h4 className="vertical-timeline-element-subtitle">Banglore, India</h4>
          <Text> Developed the Home page and the footer of the website.  </Text>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="September, 2022 - November, 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon/>}
        >
          <h3 className="vertical-timeline-element-title"> Front-end developer -  Credflow (Full-Time)</h3>
          <h4 className="vertical-timeline-element-subtitle">Noida, India</h4>
          <Text> Developed the New Dashboard for the website.  </Text>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </Box>
  );
}

export default Experience;
