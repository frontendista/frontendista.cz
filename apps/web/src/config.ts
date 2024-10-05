export const CLIENT_EVENT_TOASTER = "toaster-hydrate";

interface Config {
	status: string | false;
}

export const config: Config = {
	status: false,
};

export const links = [
	{
		name: "About",
		href: "/#about",
	},
	{
		name: "Projects",
		href: "/#projects",
	},
	{
		name: "Contact",
		href: "/#contact",
	},
	{
		name: "Verify",
		href: "/verify"
	}
];
