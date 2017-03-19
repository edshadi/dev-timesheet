import React, { PropTypes } from 'react';

export default function Day({ day_number, hours, minutes }) {
  return (
    <li>
      <strong>Day {`${day_number}`}:</strong>
      <span> {`${hours}:${minutes}`}</span>
    </li>
  );
}

Day.propTypes = {
  day_number: PropTypes.number.isRequired,
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
};
