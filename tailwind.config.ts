
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Enhanced Cyberpunk colors (no yellow)
				'neon-purple': '#9F00FF',
				'neon-pink': '#FF00C8',
				'cyber-dark': '#0A0A0F',
				'cyber-blue': '#00D4FF',
				'cyber-green': '#39FF14',
				'cyber-red': '#FF073A',
				'cyber-violet': '#8A2BE2',
				'cyber-magenta': '#FF1493',
			},
			fontFamily: {
				'orbitron': ['Orbitron', 'monospace'],
				'share-tech': ['Share Tech Mono', 'monospace'],
				'rajdhani': ['Rajdhani', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px #9F00FF, 0 0 30px #9F00FF, 0 0 40px #9F00FF'
					},
					'50%': { 
						boxShadow: '0 0 30px #FF00C8, 0 0 40px #FF00C8, 0 0 50px #FF00C8'
					}
				},
				'shooting-star': {
					'0%': { 
						transform: 'translateX(-100px) translateY(-100px) scale(0)',
						opacity: '0'
					},
					'10%': { 
						opacity: '1',
						transform: 'translateX(0px) translateY(0px) scale(1)'
					},
					'90%': { 
						opacity: '1'
					},
					'100%': { 
						transform: 'translateX(300px) translateY(300px) scale(0)',
						opacity: '0'
					}
				},
				'stars': {
					'0%': { transform: 'translateY(0px)' },
					'100%': { transform: 'translateY(-100vh)' }
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'twinkle': {
					'0%': { opacity: '0.3' },
					'100%': { opacity: '1' }
				},
				'galaxy-drift': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'shooting-star': 'shooting-star 3s linear infinite',
				'stars': 'stars 50s linear infinite',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.8s ease-out',
				'twinkle': 'twinkle 3s ease-in-out infinite alternate',
				'galaxy-drift': 'galaxy-drift 100s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
