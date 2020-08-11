export function formatTitle(string) {
  let pathname = string
    .toLowerCase()
    .split(/(?: - )|(?:-)/)
    .map(str =>
      str
        .split(/ /)
        .map(word => word.charAt(0).toUpperCase() + word.substring(1))
        .join(' '),
    )
    .join(' ');

  return pathname;
}
