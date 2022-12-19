// We need a valid CSV parser!

// A CSV (Comma-Separated Values) file is a file that represents tabular data in a simple, text-only manner. At its simplest, a CSV file contains rows of data separated by newlines, and each field is separated by commas.

// This parser needs to not only handle CSVs using commas to delimit fields, but it also needs to handle complex field values (which may be wrapped in quotes, and may span multiple lines), and also different delimiters and quote characters.

/**
 * Parses a CSV into a 2d array, respecting delimiters and quotes.
 *
 * @param {string} csv - The raw CSV.
 * @param {string} separator - The single-character delimiter.
 * @param {string} quote - The single-character quote.
 * @returns {string[][]} The parsed 2d array representing the CSV data.
*/
const parseCsv = (input, separator=",", quote='"') => {
    const result = [];
    let currentLine = [];
    let currentField = '';
    let inQuotes = false;
    let inEscape = false;
    let currentQuote = '';
    let currentSeparator = '';
    
    if (input.length !== 0) {
        for (let i = 0; i < input.length; i++) {
            const char = input[i];
            if (char === '\n') {
                if (inQuotes)
                    currentField += char;
                else {
                    currentLine.push(currentField);
                    result.push(currentLine);
                    currentLine = [];
                    currentField = '';
                    currentLineIndex++;
                    currentFieldIndex = 0;
                }
            }
            else if (char === separator) {
                if (inQuotes)
                    currentField += char;
                else {
                    currentLine.push(currentField);
                    currentField = '';
                    currentFieldIndex++;
                }
            }
            else if (char === quote) {
                if (inEscape) {
                    inEscape = false;
                    currentField += char;
                }
                else if (inQuotes) {
                    if (input[i + 1] === quote)
                        inEscape = true;
                    else
                        inQuotes = false;
                }
                else {
                    inQuotes = true;
                    currentQuote = quote;
                    currentSeparator = separator;
                }
            }
            else
                currentField += char;
        }
        if (currentField.length > 0)
            currentLine.push(currentField);
        if (currentLine.length > 0)
            result.push(currentLine);
        return result;
    }
    else
        return [[""]]
}