export function setupMultiple(multiple) {
  if (multiple >= 5) return 10;
  return multiple + 2;
}

export function setupCounter(count, multiple) {
  return count + multiple;
}
