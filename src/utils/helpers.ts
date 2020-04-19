export function getEnigmaNumber(routeName?: string | null): string {
  if (routeName) {
    const split = routeName.split("-");
    return split[split.length - 1];
  }

  return "";
}
