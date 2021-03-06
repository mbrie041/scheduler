import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  const numberOfSpots = (state, day) => {
    const newState = { ...state };
    const specificDay = state.days.find((day) => day.name === state.day);
    const emptyAppointments = specificDay.appointments.filter(
      (appointmentId) => state.appointments[appointmentId].interview === null
    );
    const numberOfSpots = emptyAppointments.length;
    specificDay.spots = numberOfSpots;
    return newState;
  };

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios
      .put(`/api/appointments/${id}`, { interview })
      .then(() => axios.get(`/api/days`))
      .then((response) => {
        setState((prev) => {
          const newState = { ...prev, appointments };
          const updatedSpotsState = numberOfSpots(newState);
          return updatedSpotsState;
        });
      });
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios
      .delete(`/api/appointments/${id}`)
      .then(() => axios.get(`/api/days`))
      .then((response) => {
        setState((prev) => {
          const newState = { ...prev, appointments };
          const updatedSpotsState = numberOfSpots(newState);
          return updatedSpotsState;
        });
      });
  }

  useEffect(() => {
    Promise.all([
      axios.get(`/api/days`),
      axios.get(`/api/appointments`),
      axios.get(`/api/interviewers`),
    ]).then((all) => {
      const [days, appointments, interviewers] = all;

      setState((prev) => ({
        ...prev,
        days: days.data,
        appointments: appointments.data,
        interviewers: interviewers.data,
      }));
    });
  }, []);

  return { state, setDay, bookInterview, cancelInterview, numberOfSpots };
}
