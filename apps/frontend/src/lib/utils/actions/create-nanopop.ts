import * as nanopop from "nanopop";
import type { Action } from "svelte/action";
import type { NanoPopOptions } from "nanopop";

const { reposition } = nanopop;

type Options = Partial<Omit<NanoPopOptions, "popper" | "reference">>;

export function createNanopop(options: Options) {
	let referenceNode: HTMLElement | null = null;
	let contentNode: HTMLElement | null = null;

	function initPosition() {
		if (referenceNode && contentNode) {
			reposition(referenceNode, contentNode, options);
		}
	}

	const referenceAction: Action = (node) => {
		referenceNode = node;
		initPosition();
		return {
			destroy: () => {
				referenceNode = null;
			}
		};
	};

	const contentAction: Action = (node) => {
		contentNode = node;

		initPosition();

		return {
			destroy: () => {
				contentNode = null;
			}
		};
	};

	return [referenceAction, contentAction];
}
