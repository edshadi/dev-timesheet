import { describe, it } from 'mocha';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
chai.use(chaiEnzyme());

describe('test', () => {
  it('is true', () => expect(1).to.equal(1));
});
