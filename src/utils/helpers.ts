import { RouteConfig } from "vue-router";
import { routes } from "./../router/routes";

/**
 * Gets the enigma number based on route name.
 * @param routeName: string | null
 */
export function getEnigmaNumber(routeName?: string | null): string {
  if (routeName) {
    const split = routeName.split("-");
    return split[split.length - 1];
  }

  return "";
}

/**
 * Returns the last existent enigma.
 * @returns number
 */
export function getLastEnigma(): number {
  const enigmas = routes.reduce((acc: number[], cur: RouteConfig) => {
    let enigma;
    if (cur.name && cur.name.includes("Enigma")) {
      enigma = getEnigmaNumber(cur.name);
      acc.push(+enigma);
    }
    return acc;
  }, []);

  return Math.max(...enigmas);
}
