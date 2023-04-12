import 'mocha';
import { expect } from 'chai';
import getLevenshteinDistance from '../topics/levenshteinDistance';

describe('Levenshtein Distance', () => {
    it(`This should return zero all through for peak and peak`, () => {
        const result = getLevenshteinDistance('peak', 'peak');
        expect(result.distance).to.equal(0);
        expect(result.subsitutions).to.equal(0);
        expect(result.insertions).to.equal(0);
        expect(result.deletions).to.equal(0);
      });

      it(`This should return distance and substitution as 1 and other values should be zero for peak and teak`, () => {
        const result = getLevenshteinDistance('peak', 'teak');
        expect(result.distance).to.equal(1);
        expect(result.subsitutions).to.equal(1);
        expect(result.insertions).to.equal(0);
        expect(result.deletions).to.equal(0);
      });

      it(`This should return distance as 3, substitutions as 2, insertions as 1 and deletions as 0 for kitten and sitting`, () => {
        const result = getLevenshteinDistance('kitten', 'sitting');
        expect(result.distance).to.equal(3);
        expect(result.subsitutions).to.equal(2);
        expect(result.insertions).to.equal(1);
        expect(result.deletions).to.equal(0);
      });

      it(`This should return distance as 6, substitutions as 5, insertions as 0 and deletions as 1 for sprint and print`, () => {
        const result = getLevenshteinDistance('sprint', 'print');
        expect(result.distance).to.equal(6);
        expect(result.subsitutions).to.equal(5);
        expect(result.insertions).to.equal(0);
        expect(result.deletions).to.equal(1);
      });
  });