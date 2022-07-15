import { reposition, type NanoPopOptions } from "nanopop";
import type { Action } from "svelte/action";

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
