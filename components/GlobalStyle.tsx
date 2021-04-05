import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	html {
		font-size: 1rem;
		font-family: "Open Sans";
		/* Prevent adjustments of font size after orientation changes in iOS */
		-webkit-text-size-adjust: 100%;
	}

	/* box-sizing reset */
	*,
	*::before,
	*::after {
  		box-sizing: border-box;
	}

	body {
		min-height: 100vh;
	}

	/* Disable hyphenation in links */
	a {
		hyphens: none;
	}

	/* Remove default margins and paddings */
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	ul,
	ol,
	dl,
	dd,
	p,
	figure,
	figcaption,
	pre,
	table,
	fieldset,
	blockquote
 	{
		margin: 0;
		padding: 0;
	}

	/* Remove bullets */
	ul {
		list-style: none;
	}

	h1, h2, h3, h4, h5, h6 {
		text-rendering: optimizeLegibility;
	}

	/* Monospace digits */
	table {
		font-feature-settings: "tnum";
	}

	/* Remove ugly bottom border */
	abbr, acronym {
		border-bottom: 0;
		cursor: default;
	}

	/* Abbreviations with spacing */
	abbr {
		letter-spacing: 0.1em;
		margin-right: -0.1em;
	}

	/* Remove the weird gap below images */
	img {
		vertical-align: middle;
	};

	/* Do not allow horizontal resizing because it breaks layout */
	textarea {
		resize: vertical;
	}

	/* Fix hidden in IE10 and prevent accidental display with CSS */
	[hidden] {
		display: none !important;
	}

	/* Remove smooth scroll for folks who don't want too much motion */
	@media (prefers-reduced-motion: reduce) {
		* {
		  scroll-behavior: auto !important;
		}
	  }
`;
