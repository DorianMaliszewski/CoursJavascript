/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			animation: {
				"timer": "timer 10s linear",
			},
      keyframes: {
        timer: {
          '0%': { width: '100%' },
          '100%': { width: '0' },
        }
      }
		},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
