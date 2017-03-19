import React, { PropTypes } from 'react';
import Day from './day';

export default function Week(props) {
  const { week_id, status, days_in_week, week_number } = props;
  const days = days_in_week.map((day) => <Day key={day.id} {...day} />);
  let elements = <div />;

  if (week_id) {
    elements = (
      <div>
        <h2>{`Week Number: ${week_number}`}</h2>
        <strong>{`Status: ${status || 'Pending'}`}</strong>
        <ul>{days}</ul>
      </div>
    );
  }
  return elements;
}

Week.propTypes = {
  week_id: PropTypes.number,
  week_number: PropTypes.number,
  days_in_week: PropTypes.array,
  status: PropTypes.string,
};

Week.defaultProps = {
  days_in_week: [],
};
