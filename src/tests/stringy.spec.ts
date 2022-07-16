import 'mocha';
import { expect } from 'chai';
import Stringy from '../classes/Stringy';

describe('Stringy methods', () => {
  describe('isPrefix', () => {
    const nougat = new Stringy('nougat');
    const NOUgat = new Stringy('NOUgat');
    const nougatWithTrailingSpace = new Stringy('nougat ');
    const choco = new Stringy('choco');

    it('This should return false for nuo as in nougat', () => {
      const result = nougat.isPrefix('nuo');
      expect(result).to.equal(false);
    });

    it('This should return false for o as in nougat', () => {
      const result = nougat.isPrefix('o');
      expect(result).to.equal(false);
    });

    it('This should return false for chocolate as in choco', () => {
      const result = choco.isPrefix('chocolate');
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

  describe('isSuffix', () => {
    const cashew = new Stringy('cashew');
    const cashewWithStartingSpace = new Stringy(' cashew');
    const casHEW = new Stringy('HEW');
    const ring = new Stringy('ring')

    it('This should return false for s in as in cashew', () => {
      const result = cashew.isSuffix('s');
      expect(result).to.equal(false);
    });

    it('This should return false for sew as in cashew', () => {
      const result = cashew.isSuffix('sew');
      expect(result).to.equal(false);
    });

    it('This should return false for HEW as in cashew with isCaseSensitive as true', () => {
      const result = cashew.isSuffix('HEW', true);
      expect(result).to.equal(false);
    });

    it('This should return false for pouring as in ring', () => {
      const result = ring.isSuffix('pouring');
      expect(result).to.equal(false);
    });


    it('This should return true for w as in cashew', () => {
      const result = cashew.isSuffix('w');
      expect(result).to.equal(true)
    });

    it('This should return true for hew as in cashew', () => {
      const result = cashew.isSuffix('hew');
      expect(result).to.equal(true)
    });

    it('This should return true for cashew as in cashew', () => {
      const result = cashew.isSuffix('cashew');
      expect(result).to.equal(true)
    });

    it('This should return true for cashew as in cashew with space as prefix', () => {
      const result = cashewWithStartingSpace.isSuffix('cashew');
      expect(result).to.equal(true)
    });


    it('This should return true for HEW as in casHEW with isCaseSensitive as false', () => {
      const result = casHEW.isSuffix('HEW');
      expect(result).to.equal(true);
    });

    it('This should return true for hew as in casHEW with isCaseSensitive as false', () => {
      const result = casHEW.isSuffix('hew');
      expect(result).to.equal(true);
    });
  });
});
