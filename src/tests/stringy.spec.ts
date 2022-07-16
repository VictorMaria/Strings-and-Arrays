import 'mocha';
import { expect } from 'chai';
import Stringy from '../classes/Stringy';

describe('Stringy methods', () => {
  describe('isPrefix', () => {
    const nougat = new Stringy('nougat');
    const NOUgat = new Stringy('NOUgat');
    const nougatWithTrailingSpace = new Stringy('nougat ')

    it('This should return false for nuo as in nougat', () => {
      const result = nougat.isPrefix('nuo');
      expect(result).to.equal(false);
    });

    it('This should return false for o as in nougat', () => {
      const result = nougat.isPrefix('o');
      expect(result).to.equal(false);
    });
    
    it('This should return true for n as in nougat', () => {
      const result = nougat.isPrefix('n');
      expect(result).to.equal(true);
    });

    it('This should return true for nou as in nougat', () => {
      const result = nougat.isPrefix('nou');
      expect(result).to.equal(true);
    });

    it('This should return true for nougat as in nougat with a trailing space', () => {
      const result = nougatWithTrailingSpace.isPrefix('nougat');
      expect(result).to.equal(true);
    })

    it('This should return true for nougat as in nougat', () => {
      const result = nougat.isPrefix('nougat');
      expect(result).to.equal(true);
    });

    it('This should return true for NOU as in NOUgat', () => {
      const result = NOUgat.isPrefix('NOU', true);
      expect(result).to.equal(true);
    });

    it('This should return true for NOU as in NOUgat where case is not sensitive', () => {
      const result = NOUgat.isPrefix('NOU');
      expect(result).to.equal(true);
    });

    it('This should return true for nou as in NOUgat where case is not sensitive', () => {
      const result = NOUgat.isPrefix('nou');
      expect(result).to.equal(true);
    });
  });
});
