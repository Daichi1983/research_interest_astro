export const SITE = {
	title: 'Palau Research Lab.',
	description: 'This is private website of Daichi who is interested in Palau and Pacific islands.',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/.github/assets/banner.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
	Japanese: 'ja',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Main Contents': [
			{ text: 'Top', link: 'en/top' },
			{ text: 'Introduction', link: 'en/introduction' },
			{ text: 'Palau', link: 'en/palau' },
			{ text: 'Anthropology', link: 'en/anthropology' },
			{ text: 'Linguistics', link: 'en/linguistics' },
		],
		'About this site': [
			{ text: 'About', link: 'en/about' },
			{ text: 'Link', link: 'en/link' },
		],
	},
	ja: {
		'メインコンテンツ': [
			{ text: 'TOP', link: 'ja/top' },
			{ text: '自己紹介', link: 'ja/introduction' },
			{ text: 'パラオ共和国', link: 'ja/palau' },
			{ text: '文化人類学', link: 'ja/anthropology' },
			{ text: '言語学', link: 'ja/linguistics' },
		],
		'このサイトについて': [
			{ text: 'このサイトについて', link: 'ja/about' },
			{ text: 'リンク集', link: 'ja/link' },
		],
	},
};
