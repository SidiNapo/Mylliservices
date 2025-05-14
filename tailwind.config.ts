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
				// Mylli Services updated color scheme to match the logo
				mylli: {
					primary: '#0077C0', // Main blue from logo
					'primary-dark': '#005e9c', // Darker blue for hover states
					secondary: '#E02E31', // Red from logo
					accent: '#0099E8', // Lighter blue for accents
					light: '#E6F3FC', // Light blue for backgrounds
					dark: '#00467A', // Deep blue for text and emphasis
					gray: '#64748B', // Neutral gray for body text
					tertiary: '#FF6B6D', // Lighter red for highlights
					quaternary: '#0CAAFF', // Bright blue for indicators
					surface: '#FFFFFF', // Surface color
					'surface-hover': '#F9FAFB', // Hover state for surface
					'y-color': '#029edd', // New color for 'y' in Mylli
					'brand-red': '#ff0707', // New red color for other letters in Mylli
				}
			},
			fontFamily: {
				sans: ['Quicksand', 'sans-serif'],
				serif: ['Montserrat', 'serif'],
				gliker: ['Roboto', 'sans-serif'], // Using Roboto Bold as a substitute for Gliker Bold
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0', opacity: '0' },
					to: { height: 'var(--radix-accordion-content-height)', opacity: '1' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
					to: { height: '0', opacity: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(-20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'float': {
					'0%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
					'100%': { transform: 'translateY(0px)' }
				},
				'pulse-soft': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' },
				},
				'parallax-scroll': {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(-50%)' }
				},
				'background-pan': {
					'0%': { backgroundPosition: '0% 0%' },
					'100%': { backgroundPosition: '100% 100%' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'radial-pulse': {
					'0%': { transform: 'scale(0.95)', opacity: '0.7' },
					'50%': { transform: 'scale(1.05)', opacity: '0.8' },
					'100%': { transform: 'scale(0.95)', opacity: '0.7' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'text-gradient': {
					'0%': { backgroundPosition: '0% 50%' },
					'100%': { backgroundPosition: '100% 50%' }
				},
				'wave': {
					'0%': { transform: 'rotate(0deg)' },
					'10%': { transform: 'rotate(14deg)' },
					'20%': { transform: 'rotate(-8deg)' },
					'30%': { transform: 'rotate(14deg)' },
					'40%': { transform: 'rotate(-4deg)' },
					'50%': { transform: 'rotate(10deg)' },
					'60%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(0deg)' }
				},
				'blob': {
					'0%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
					'50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' },
					'100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' }
				},
				'bounce-subtle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'border-flow': {
					'0%': { backgroundPosition: '0% 50%' },
					'100%': { backgroundPosition: '100% 50%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out',
				'fade-in-right': 'fade-in-right 0.7s ease-out',
				'fade-in-left': 'fade-in-left 0.7s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
				'parallax-scroll': 'parallax-scroll 20s linear infinite',
				'background-pan': 'background-pan 20s linear infinite',
				'shimmer': 'shimmer 2s infinite linear',
				'radial-pulse': 'radial-pulse 4s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 12s linear infinite',
				'text-gradient': 'text-gradient 2s linear infinite',
				'wave': 'wave 1.5s infinite',
				'blob': 'blob 8s ease-in-out infinite',
				'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
				'spin-slow': 'spin-slow 15s linear infinite',
				'border-flow': 'border-flow 3s linear infinite'
			},
			backgroundImage: {
				'hero-pattern': "url('/images/hero-pattern.svg')",
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'mesh-gradient': 'radial-gradient(at 40% 20%, hsla(262, 83%, 90%, 1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(220, 91%, 95%, 1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(262, 83%, 95%, 1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(339, 100%, 95%, 0.4) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(29, 100%, 95%, 0.5) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(262, 100%, 90%, 1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(343, 100%, 95%, 0.5) 0px, transparent 50%)',
			},
			boxShadow: {
				'soft': '0 4px 15px rgba(0, 0, 0, 0.05)',
				'card': '0 10px 30px rgba(0, 0, 0, 0.08)',
				'hover': '0 20px 40px rgba(0, 0, 0, 0.12)',
				'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
				'neon': '0 0 5px rgba(139, 92, 246, 0.5), 0 0 15px rgba(139, 92, 246, 0.3), 0 0 30px rgba(139, 92, 246, 0.15)',
				'3d': '0 10px 0 rgba(0, 0, 0, 0.2)',
				'inner-glow': 'inset 0 0 15px rgba(139, 92, 246, 0.15)'
			},
			transitionProperty: {
				'height': 'height',
				'spacing': 'margin, padding',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
