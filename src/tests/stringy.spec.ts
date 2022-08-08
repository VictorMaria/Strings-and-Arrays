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

  describe('isPalindrome', () => {
    const emptyString = new Stringy('');
    const peak = new Stringy('peak');
    const cashewNougat = new Stringy('cashew nougat');
    const tenet = new Stringy('tenet');
    const kayAK = new Stringy('kayAK');
    const stepOnNoPets = new Stringy('Step on no pets');
    const nursesRun = new Stringy('nurses run');
    const yoBananaBoy = new Stringy('Yo, Banana Boy! ');

    it('This should return false for an empty string', () => {
      const result = emptyString.isPalindrome();
      expect(result).to.equal(false);
    })

    it('This should return false for peak', () => {
      const result = peak.isPalindrome();
      expect(result).to.equal(false);
    });

    it(`This should return false for 'cashew nougat'`, () => {
      const result = cashewNougat.isPalindrome();
      expect(result).to.equal(false);
    });

    it('This should return true for tenet', () => {
      const result = tenet.isPalindrome();
      expect(result).to.equal(true);
    });

    it('This should return true for kayAK regardless of the case', () => {
      const result = kayAK.isPalindrome();
      expect(result).to.equal(true);
    });

    it(`This should return true for a phrase such as 'Step on no pets'`, () => {
      const result = stepOnNoPets.isPalindrome();
      expect(result).to.equal(true);
    });

    it(`This should return true for a phrase such as 'nurses run'`, () => {
      const result = nursesRun.isPalindrome();
      expect(result).to.equal(true);
    });

    it(`This should return true for a phrase such as 'Yo, Banana Boy! `, () => {
      const result = yoBananaBoy.isPalindrome();
      expect(result).to.equal(true);
    });
  });
});
