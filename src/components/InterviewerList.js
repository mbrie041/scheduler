import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";
import PropTypes from "prop-types";

export default function InterviewerList(props) {
  const passedInterviewerList = props.interviewers.map(
    (iterratedInterviewer) => (
      <InterviewerListItem
        key={iterratedInterviewer.id}
        name={iterratedInterviewer.name}
        avatar={iterratedInterviewer.avatar}
        selected={iterratedInterviewer.id === props.interviewer}
        setInterviewer={(event) =>
          props.setInterviewer(iterratedInterviewer.id)
        }
      />
    )
  );
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{passedInterviewerList}</ul>
    </section>
  );
}
InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired,
};
