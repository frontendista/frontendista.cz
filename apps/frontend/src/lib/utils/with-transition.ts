import { utilities } from "$stylesheets/theme.css";

/**
 * Combines provided transition shorthand with the global transition.
 *
 * @param transition - Transition shorthand.
 * @returns Combined transition.
 */
export function withTransition(transition: string) {
	return `${utilities.transitionGlobal}, ${transition}`;
}
