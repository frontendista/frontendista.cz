import { IconButton } from "~/components/common/icon-button";
import * as Dialog from "~/components/form/radix/dialog";

import { links } from "../../config";
import { Icon } from "../../components/common/icon";

import type { FunctionComponent } from "preact";

export const NavigationMobile: FunctionComponent = () => {
	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<IconButton className="self-center justify-self-end text-icon lg:hidden" icon="menu">Open navigation</IconButton>
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay />
				<Dialog.Content className="flex items-center justify-end bg-primary">
					<Icon viewBox="0 0 30 375" icon="logo-90" className="mr-auto h-full" />

					<Dialog.Title className="sr-only">
						Navigation
					</Dialog.Title>

					<Dialog.Close asChild>
						<IconButton className="absolute right-lg top-lg text-icon" icon="octagon-x">Close navigation</IconButton>
					</Dialog.Close>

					<Dialog.Close asChild>
						<IconButton className="absolute bottom-lg right-lg text-icon" icon="octagon-x">Close navigation</IconButton>
					</Dialog.Close>

					<ul className="flex flex-col gap-lg text-right text-h2">
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
