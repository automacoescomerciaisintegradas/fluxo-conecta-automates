
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
				// Futuristic neon colors
				'neon-green': '#22c55e',
				'neon-blue': '#3b82f6',
				'neon-purple': '#a855f7',
				'neon-pink': '#ec4899',
				'neon-orange': '#f97316',
				'neon-cyan': '#06b6d4',
				'neon-yellow': '#eab308',
				'dark-bg': '#0a0a0f',
				'dark-surface': '#1a1a2e',
				'dark-border': '#2d2d44',
				// Enhanced automation colors
				'automation-green': '#22c55e',
				'automation-dark-green': '#16a34a',
				'automation-light-green': '#dcfce7',
				'automation-gray': '#f8fafc',
				'automation-purple': '#8b5cf6',
				'automation-pink': '#ec4899',
				'automation-orange': '#f97316',
				'automation-blue': '#10b981',
				'automation-indigo': '#6366f1',
				'gradient-start': '#10b981',
				'gradient-end': '#059669',
				'glass-bg': 'rgba(255, 255, 255, 0.1)',
				'glass-border': 'rgba(255, 255, 255, 0.2)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'mesh-gradient': 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
				'hero-gradient': 'linear-gradient(135deg, #10b981 0%, #059669 25%, #22c55e 50%, #16a34a 75%, #15803d 100%)',
				'hero-gradient-dark': 'linear-gradient(135deg, #1e1b4b 0%, #312e81 25%, #3730a3 50%, #4338ca 75%, #4f46e5 100%)',
				'card-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
				'card-gradient-dark': 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
				'neon-gradient': 'linear-gradient(45deg, #22c55e, #3b82f6, #a855f7, #ec4899)',
				'dark-mesh': 'radial-gradient(ellipse at top, #1e1b4b 0%, #0f0f23 50%, #000000 100%)',
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
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)'
					},
					'50%': {
						boxShadow: '0 0 40px rgba(34, 197, 94, 0.8)'
					}
				},
				'pulse-neon': {
					'0%, 100%': {
						boxShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor'
					},
					'50%': {
						boxShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor'
					}
				},
				'rotate-gradient': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg)'
					}
				},
				'matrix-rain': {
					'0%': {
						transform: 'translateY(-100vh)'
					},
					'100%': {
						transform: 'translateY(100vh)'
					}
				},
				'cyber-glitch': {
					'0%, 100%': {
						transform: 'translate(0)',
						filter: 'hue-rotate(0deg)'
					},
					'20%': {
						transform: 'translate(-2px, 2px)',
						filter: 'hue-rotate(90deg)'
					},
					'40%': {
						transform: 'translate(-2px, -2px)',
						filter: 'hue-rotate(180deg)'
					},
					'60%': {
						transform: 'translate(2px, 2px)',
						filter: 'hue-rotate(270deg)'
					},
					'80%': {
						transform: 'translate(2px, -2px)',
						filter: 'hue-rotate(360deg)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out',
				'slide-in': 'slide-in 0.5s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
				'rotate-gradient': 'rotate-gradient 8s linear infinite',
				'matrix-rain': 'matrix-rain 3s linear infinite',
				'cyber-glitch': 'cyber-glitch 0.3s ease-in-out infinite',
			},
			backdropBlur: {
				xs: '2px',
			},
			boxShadow: {
				'neon': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
				'neon-lg': '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
				'cyber': '0 0 20px rgba(34, 197, 94, 0.5), inset 0 0 20px rgba(34, 197, 94, 0.1)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
