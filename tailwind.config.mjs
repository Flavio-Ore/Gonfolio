import animations from '@midudev/tailwind-animations'
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter Variable', ...defaultTheme.fontFamily.sans],
        inder: ['Inder', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        h1: '36px',
        h2: '30px',
        h3: '24px',
        body: '18px',
        base: '16px',
        small: '14px',
        subtle: '12px',
        tiny: '10px'
      },
      lineHeight: {
        default: '140%'
      },
      colors: {
        light: 'var(--color-light)',
        obscure: 'var(--color-obscure)',
        golden: 'var(--color-golden)'
      },
      screens: {
        xs: '360px',
        ...defaultTheme.screens,
        '3xl': '1650px'
      },
      animation: {
        'background-shine': 'background-shine 2s linear infinite'
      },
      keyframes: {
        'background-shine': {
          from: {
            backgroundPosition: '0 0'
          },
          to: {
            backgroundPosition: '-200% 0'
          }
        }
      }
    }
  },
  plugins: [animations]
}

/*

@layer utilities {
	.h1-bold {
		@apply text-[36px] font-bold leading-[140%] tracking-tighter;
	}

	.h1-semibold {
		@apply text-[36px] font-semibold leading-[140%] tracking-tighter;
	}

	.h2-bold {
		@apply text-[30px] font-bold leading-[140%] tracking-tighter;
	}

	.h3-bold {
		@apply text-[24px] font-bold leading-[140%] tracking-tighter;
	}
	.body-bold {
		@apply text-[18px] font-bold leading-[140%];
	}

	.body-medium {
		@apply text-[18px] font-medium leading-[140%];
	}
	.base-semibold {
		@apply text-[16px] font-semibold leading-[140%] tracking-tighter;
	}

	.base-medium {
		@apply text-[16px] font-medium leading-[140%];
	}

	.base-regular {
		@apply text-[16px] font-normal leading-[140%];
	}

	.small-semibold {
		@apply text-[14px] font-semibold leading-[140%] tracking-tighter;
	}

	.small-medium {
		@apply text-[14px] font-medium leading-[140%];
	}

	.small-regular {
		@apply text-[14px] font-normal leading-[140%];
	}

	.subtle-semibold {
		@apply text-[12px] font-semibold leading-[140%];
	}

	.tiny-medium {
		@apply text-[10px] font-medium leading-[140%];
	}
*/
