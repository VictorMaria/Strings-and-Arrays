// the Levenshtein distance between two words is the minimum number of single-character edits (insertions, deletions or substitutions) required to change one word into the other.

const getLevenshteinDistance = (initialString: string, finalString: string) => {

    let distance = 0;
    let insertions = 0;
    let deletions = 0;
    let subsitutions = 0;

    if (initialString === finalString) return { distance, insertions, deletions, subsitutions};

    const shortestString = initialString < finalString ? initialString : finalString;
    for (let index = 0; index < shortestString.length; index++) {
        if (initialString[index] !== finalString[index]) {
            subsitutions++;
            distance++;
        } 
    }

    /* if the shortest string is the initial string or if the final string is greater 
    than the initial string this means insertions have to occur to arrive at the final string */
    if (shortestString === initialString) {
        insertions = finalString.length - initialString.length;
        distance += insertions;
    /* if the shortest string is not equal to the initial string or the final string is less than the initial string this
     means deletions have to occur */    
    } else {
        deletions = initialString.length - finalString.length;
        distance += deletions;
    }

    return {
        distance,
        insertions,
        deletions,
        subsitutions,
    };
};

export default getLevenshteinDistance;
