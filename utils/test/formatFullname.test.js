const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('FormatFullname', () => {
  it('should return an error if "fullName" arg length is 0', () => {
    expect(formatFullname('')).to.equal('Error');
  });

  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
  });

  it('should return an error if arg is different than two strings separeted by space', () => {
    expect(formatFullname('lorem ipsum ipsum')).to.equal('Error');
    expect(formatFullname('lorem')).to.equal('Error');
    expect(formatFullname('l o r e m')).to.equal('Error');
  });

  it('should return corrected form of firstName and lastName ', () => {
    expect(formatFullname('lorem ipsum')).to.equal('Lorem Ipsum');
    expect(formatFullname('LOREM IPSUM')).to.equal('Lorem Ipsum');
    expect(formatFullname('lOrEm IpSuM')).to.equal('Lorem Ipsum');
  });
});