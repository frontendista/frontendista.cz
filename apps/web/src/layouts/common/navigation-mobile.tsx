import { IconButton } from "~/components/common/icon-button";
import * as Dialog from "~/components/form/radix/dialog";

import { links } from "../../config";

import type { FunctionComponent } from "preact";

export const NavigationMobile: FunctionComponent = () => {
	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<IconButton className="self-center justify-self-end lg:hidden text-icon" icon="menu">Open navigation</IconButton>
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay />
				<Dialog.Content className="bg-primary flex items-center justify-end">
					<Dialog.Title className="sr-only">
						Navigation
					</Dialog.Title>

					<Dialog.Close asChild>
						<IconButton className="absolute right-lg top-lg text-icon" icon="octagon-x">Close navigation</IconButton>
					</Dialog.Close>

					<Dialog.Close asChild>
						<IconButton className="absolute right-lg bottom-lg text-icon" icon="octagon-x">Close navigation</IconButton>
					</Dialog.Close>

					<ul className="flex flex-col gap-lg text-right">
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
