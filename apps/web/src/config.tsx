import type { FAQCategories, FAQItem } from "./components/faq/faq";

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
		name: "FAQ",
		href: "/faq",
	},
	{
		name: "Verify",
		href: "/verify"
	}
];

export const faq: Record<FAQCategories, FAQItem[]> = {
	background: [
		{
			question: "How long are you involved in development?",
			answer: "TODO"
		},
		{
			question: "What is your education?",
			answer: "TODO"
		},
		{
			question: "What is your work experience?",
			answer: "TODO"
		},
	],
	"hardware-software": [
		{
			question: "What OS are you using?",
			answer: "I'm running Windows 11 on my desktop and usually the latest version of MacOS."
		},
		{
			question: "What IDE are you using?",
			answer: (
				<>
					<p>I'm using Visual Studio Code for the majority of my web development work.</p>
					<p>Ocassionaly I use products from JetBrains suite for specific technologies.</p>
					<ul data-list="text">
						<li>JetBrains DataGrip for database management.</li>
						<li>JetBrains Pycharm for Python development.</li>
						<li>JetBrains Rider for C# development.</li>
					</ul>
				</>
			)
		},
		{
			question: "What desktop hardware are you running on?",
			answer: (
				<>
					<p>Core components</p>
					<ul data-list="text">
						<li>CPU - AMD Ryzen 5 3600</li>
						<li>GPU - GIGABYTE RTX 2070 Super</li>
						<li>RAM - 32GB DDR4</li>
					</ul>

					<p>Storage</p>
					<ul data-list="text">
						<li>M.2 SSD 512GB</li>
						<li>2x 1TB HDD</li>
					</ul>

					<p>Audio devices</p>
					<ul data-list="text">
						<li>Shure SM58 SE</li>
						<li>EVO 8</li>
					</ul>

					<p>Other</p>
					<ul data-list="text">
						<li>Phantenks case</li>
					</ul>
				</>
			)
		},
		{
			question: "What laptop are you running on?",
			answer: "TODO"
		},
		{
			question: "What software have you found useful?",
			answer: "TODO"
		}
	],
	technologies: [
		{
			question: "What is your usual front-end techstack?",
			answer: "TODO"
		},
		{
			question: "What is your usual back-end techstack?",
			answer: "TODO"
		},
		{
			question: "What other technologies do you frequently use?",
			answer: "TODO"
		}
	]
};
