import React from 'react';
import { describe, it, beforeEach } from 'mocha';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import Week from '../src/components/week';
import Day from '../src/components/day';

chai.use(chaiEnzyme());

describe('Week', () => {
  let week;
  beforeEach(() => {
    week = {
      week_id: 1,
      status: 'approved',
      days_in_week: [{
        day_number: 1,
        hours: 1,
        minutes: 1,
      }],
      week_number: 1,
    };
  });

  it('renders empty div if no week_id is given', () => {
    const component = shallow(<Week />);
    expect(component).to.contain(<div />);
    expect(component).to.not.contain(<h2>{`Week Number: ${week.week_number}`}</h2>);
    expect(component.find(Day).length).to.equal(0);
  });

  it('renders week number header', () => {
    expect(
      shallow(<Week {...week} />)
    ).to.contain(<h2>{`Week Number: ${week.week_number}`}</h2>);
  });

  it('renders status', () => {
    expect(
      shallow(<Week {...week} />)
    ).to.contain(<strong>{`Status: ${week.status}`}</strong>);
  });

  it('renders days based on days_in_week', () => {
    expect(
      shallow(<Week {...week} />).find(Day).length
    ).to.equal(week.days_in_week.length);
  });
});
