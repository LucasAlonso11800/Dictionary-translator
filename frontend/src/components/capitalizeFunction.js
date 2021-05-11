export default function capitalize(word) {
    const firstLetter = word.substring(0, 1).toUpperCase();
    const rest = word.substring(1);
    return firstLetter + rest
};