import { links } from "../../config";

import { Icon } from "~/components/common/icon";
import * as Dialog from "~/components/form/radix/dialog";

import type { FunctionComponent } from "preact";

export const NavigationMobile: FunctionComponent = () => {
	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<button className="self-center justify-self-end p-[0.75rem] lg:hidden">
					<span className="sr-only">Open navigation</span>
					<Icon icon="menu" className="w-2lg" />
				</button>
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay />
				<Dialog.Content className="bg-primary">
					<ul className="flex flex-col gap-md">
						{links.map(({ href, name }) => {
							return (
								<li key={name}>
									<Dialog.Close asChild>
										<a data-link href={href}>{name}</a>
									</Dialog.Close>
								</li>
							);
						})}
					</ul>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
};
