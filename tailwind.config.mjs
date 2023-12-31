/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				newPalette1: "#6c0cac",
				newPalette2: "#07fbce",
				newPalette3: "#ff016a",
				newPalette4: "#1b2226",
				newPalette5: "#00dc82",
				newPalette6: "#ffdd1c",
				newPalette7: "#ff6493",
				newPalette8: "#00ade1",
				violeta: "#722fac",
				rojofurte: "#fe001b",
				Negro: "#000",
				FO: "#22222E",
				FS: "hsla(0deg 0% 100% / 80%)",
				FE: "#ABABAB",
				FA: "#393A5A",
				FV: "#706F8E",
				FX: "#ADA9BA",
				FL: "rgba(255, 255, 255, 0.1)",
				Primario: "#2bd2ff",
				primario: "#1e9bff",
				Secundario: "#ff0461",
				Tercero: "#18d539",
				tercero: "#6eff3e",
				Cuarto: "#101010",
				grayDark: "#1f212b",
				indigo: "#6610f2",
				purple: "#6f42c1",
				pink: "#e83e8c",
				red: "#dc3545",
				orange: "#fd8e14",
				green: "#28a745",
				teal: "#20c997",
				cyan: "#17a2b8",
				gray: "#6c757d",
				primary: "#007bff",
				secondary: "#232c33",
				success: "#28a745",
				info: "#001E2B",
				warning: "#ffc107",
				danger: "#2b343b",
				light: "#f8f9fa",
				dark: "#2b2d42",
				dark_One: "#13151a",
				boton: "#171821",
				seleste: "#2196f3",
				gradi_dark1: "rgba(248,113,113,1)",
				gradi_dark2: "rgba(167,139,250,1)",
				gradi_blue: "rgba(147,197,253,1)",
				gradi_blue2: " rgba(59,130,246,5)",
				gradi_light: " rgba(255, 255, 255, 0.5)",
				gradi_dark: " rgba(20 ,20 ,20 , .22)",
			},
			fontFamily: {
				mplus: ["'M PLUS Rounded 1c'", "Verdana", "sans-serif"],
			},
		},
		plugins: [],
	},
}
