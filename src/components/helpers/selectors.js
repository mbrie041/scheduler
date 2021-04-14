export function getAppointmentsForDay(state, day) {

  const foundDay = state.days.find(givenObject => givenObject.name === day);
  if (foundDay) {
      const foundAppointments = foundDay.appointments.map(id => state.appointments[id])
      return foundAppointments
    } else {
      return [];
    }

}