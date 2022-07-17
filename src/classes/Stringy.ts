export default class Stringy {
    text: string;

    constructor (text: string) {
        this.text = text;
    }

    isPrefix(prefix: string, isCaseSensitive: boolean = false) {
        if (prefix.length > this.text.length) return false;

        let matches: string = '';
        const refinedPrefix = isCaseSensitive ? prefix: prefix.toLowerCase();
        const refinedText = isCaseSensitive ? this.text : this.text.toLowerCase();

        for (let index = 0; index < refinedPrefix.length; index++) {
            if (refinedPrefix[index] === refinedText[index]) {
                matches += refinedPrefix[index];
            } else {
                return false;
            }
        }

        return refinedPrefix.length === matches.length;
    }

    isSuffix(suffix: string, isCaseSensitive: boolean = false) {
        if (suffix.length > this.text.length) return false;

        let matches = '';
        const refinedSuffix = isCaseSensitive ? suffix : suffix.toLowerCase();
        const refinedText = isCaseSensitive ? this.text : this.text.toLowerCase();

        const suffixTextDifference = refinedText.length - refinedSuffix.length;

        for(let index = refinedSuffix.length - 1; index >= 0; index--) {
            if (refinedSuffix[index] === refinedText[index + suffixTextDifference]) {
                matches = `${refinedSuffix[index]}${matches}`;
            } else {
                return false;
            }
        }

        return matches.length === refinedSuffix.length;
    }
};
