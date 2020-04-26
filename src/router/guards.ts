import { storageService } from "@/services/storage.service";
import { getEnigmaNumber, getLastEnigma } from "@/utils/helpers";
import { Route } from "vue-router";
import { ENIGMA_CODE } from "@/utils/enigma-code";

/**
 * Routes the user to the last unresolved enigma,
 * or just continues to home.
 * @param next: (t?: object) => void
 */
export function setInitialPage(next: (t?: object) => void) {
  const progress = storageService.getUserProgress();
  const lastEnigma = getLastEnigma();
  if (progress && +progress <= lastEnigma) {
    next({
      name: `Enigma-${Object.keys(ENIGMA_CODE).find(
        k => ENIGMA_CODE[+k] === progress
      )}`
    });
  } else {
    next();
  }
}

/**
 * Checks if the user is allowed to access
 * the current enigma, else goes to last unresolved
 * enigma or home.
 * @param next: (t?: object) => void
 */
export function isAllowed(to: Route, next: (t?: object) => void) {
  const progress = storageService.getUserProgress();
  const currentEnigma = getEnigmaNumber(to.name);
  let progressValue = null;
  let isAllowed = false;

  if (progress && currentEnigma) {
    progressValue = Object.keys(ENIGMA_CODE).find(
      k => ENIGMA_CODE[+k] === progress
    );
    isAllowed = progressValue ? +progressValue <= +currentEnigma : false;
  }

  if (!isAllowed) {
    if (progress) {
      next({ name: `Enigma-${progressValue}` });
    } else {
      next({ name: "Home" });
    }
  } else {
    next();
  }
}
