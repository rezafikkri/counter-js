export function setupMultiple(multiple) {
  if (multiple >= 5) return 1;
  return multiple + 20;
}

export function setupCounter(count, multiple) {
  return count + multiple;
}
