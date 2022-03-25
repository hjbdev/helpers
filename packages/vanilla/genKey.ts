/**
 * Generate a random string
 */
 export default function genKey() : string {
    return (
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15)
    );
}