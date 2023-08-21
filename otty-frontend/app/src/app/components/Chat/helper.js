export const langDirection = (text) => {
   return  text && /[\u0600-\u06FF]/.test(text) ? "text-right" : "text-left"; // Check for Arabic characters
}