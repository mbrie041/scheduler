import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const passedDays = props.days.map((iteratedDay) => (
    <DayListItem
      key={iteratedDay.id}
      name={iteratedDay.name}
      spots={iteratedDay.spots}
      selected={iteratedDay.name === props.day}
      setDay={props.setDay}
    />
  ));
  return <ul>{passedDays}</ul>;
}
