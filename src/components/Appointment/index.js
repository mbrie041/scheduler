import React, { Fragment, useEffect, setResults } from "react";
import "./styles.scss";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import Form from "components/Appointment/Form";
import Status from "components/Appointment/status";
import Delete from "components/Appointment/Delete";
import useVisualMode from "hooks/useVisualMode";
import Confirm from "components/Appointment/Confirm";
import Error from "components/Appointment/Error";

export default function Appointment(props) {
  const { interview } = props;
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETE = "DELETE";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
    transition(SAVING);
    props
      .bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch((error) => transition(ERROR_SAVE, true));
  }
  function deleted(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
    transition(DELETE, true);
    props
      .cancelInterview(props.id, interview)
      .then(() => transition(EMPTY))
      .catch((error) => transition(ERROR_DELETE, true));
  }

  useEffect(() => {
    if (props.interview && mode === EMPTY) {
      transition(SHOW);
    }
    if (props.interview === null && mode === SHOW) {
      transition(EMPTY);
    }
  }, [props.interview, transition, mode]);

  return (
    <Fragment>
      <article className="appointment" data-testid="appointment">
        <Header time={props.time} />
        {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
        {mode === SHOW && (
          <Show
            student={props.interview.student}
            interviewer={props.interview.interviewer}
            onDelete={() => {
              transition(CONFIRM);
            }}
            onEdit={() => {
              transition(EDIT);
            }}
          />
        )}
        {mode === CREATE && (
          <Form
            interviewers={props.interviewers}
            onCancel={back}
            onSave={save}
          />
        )}
        {mode === SAVING && <Status message="Saving" />}
        {mode === DELETE && <Delete message="Deleting" />}
        {mode === CONFIRM && (
          <Confirm
            message="Are you sure you want to delete?"
            onCancel={() => {
              transition(SHOW);
            }}
            onConfirm={deleted}
          />
        )}
        {mode === EDIT && (
          <Form
            name={props.interview.student}
            interviewer={props.interview.interviewer.id}
            interviewers={props.interviewers}
            onCancel={back}
            onSave={save}
          />
        )}
        {mode === ERROR_SAVE && <Error message="Error Saving" onClose={back} />}
        {mode === ERROR_DELETE && (
          <Error message="Error Deleting" onClose={back} />
        )}
      </article>
    </Fragment>
  );
}
