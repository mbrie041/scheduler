import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";
//interviewers:array - an array of objects containing the information of each interviewer
//interviewer:number - the id of an interviewer
//setInterviewer:function - a function that accepts an interviewer id

export default function InterviewerList(props) {
  const passedInterviewerList = props.interviewers.map(
    (iterratedInterviewer) => (
      <InterviewerListItem
        key={iterratedInterviewer.id}
        name={iterratedInterviewer.name}
        avatar={iterratedInterviewer.avatar}
        selected={iterratedInterviewer.id === props.interviewer}
        setInterviewer={event => props.setInterviewer(iterratedInterviewer.id)}
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
