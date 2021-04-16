const getAppointmentsForDay = (state, day) => {
  const foundDay = state.days.find((givenObject) => givenObject.name === day);
  if (foundDay) {
    const foundAppointments = foundDay.appointments.map(
      (id) => state.appointments[id]
    );
    return foundAppointments;
  } else {
    return [];
  }
};

const getInterview = (state, interview) => {
  if (!interview) {
    return null;
  }
  const interviewObj = {
    ...interview,
    interviewer: { ...state.interviewers[interview.interviewer] },
  };
  return interviewObj;
};

const getInterviewersForDay = (state, day) => {
  const foundDay = state.days.find((givenObject) => givenObject.name === day);
  if (foundDay) {
    const foundInterviewers = foundDay.interviewers.map(
      (id) => state.interviewers[id]
    );
    return foundInterviewers;
  } else {
    return [];
  }
};

export { getAppointmentsForDay, getInterview, getInterviewersForDay };
