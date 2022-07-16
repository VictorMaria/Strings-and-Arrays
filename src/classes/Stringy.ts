export default class Stringy {
    text: string;

    constructor (text: string) {
        this.text = text;
    }

    isPrefix(prefix: string, isCaseSensitive: boolean = false) {
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
}