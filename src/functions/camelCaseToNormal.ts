export function camelCaseToNormal(camelCaseString: string): string {
  // Replace capital letters with a space followed by the lowercase letter
  let normalString = camelCaseString.replace(/([A-Z])/g, " $1");

  // Convert the string to lowercase and trim any leading/trailing whitespace
  normalString = normalString.toLowerCase().trim();

  return normalString;
}
