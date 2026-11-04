/** @type {import('tailwindcss').Config} */
export default {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ischys: {
          bg: '#0A0A0B',
          surface1: '#111113',
          surface2: '#17171A',
          surface3: '#212127',
          border: '#26262C',
          hair: '#1D1D22',
          text1: '#F4F4F5',
          text2: '#97979E',
          text3: '#5B5B63',
          success: '#2DD881',
          warning: '#FFC24B',
          error: '#FF4D4D',
          accent: '#FF4A1C',
        },
        metro: {
          // Official Cairo Metro Line Colors: Line 1 Blue, Line 2 Red, Line 3 Green
          line1: '#2563EB', // Blue / Line 1 (Helwan - New El Marg)
          line2: '#DC2626', // Red / Line 2 (Shubra - El Mounib)
          line3: '#10B981', // Green / Line 3 (Adly Mansour - Rod El Farag / Cairo Univ)
          monorail: '#A855F7', // Purple / Monorail
          lrt: '#06B6D4', // Cyan / LRT Electric Train
          brt: '#F59E0B', // Amber / BRT Express
          cairo: {
            blue: '#2563EB',
            red: '#DC2626',
            green: '#10B981',
            darkNavy: '#0A0A0B'
          }
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', '"Inter"', 'system-ui', 'sans-serif'],
        helvetica: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', '"Inter"', 'system-ui', 'sans-serif'],
        cairo: ['Cairo', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Tahoma', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        space: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        'apple-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'apple-press': 'cubic-bezier(0.2, 0, 0, 1)',
        'apple-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'apple-drawer': 'cubic-bezier(0.32, 0.72, 0, 1)',
      },
      transitionDuration: {
        '120': '120ms',
        '180': '180ms',
        '220': '220ms',
        '240': '240ms',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        sheetUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        modalPop: {
          '0%': { opacity: '0', transform: 'scale(0.96) translateY(6px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' }
        }
      },
      animation: {
        'fade-in': 'fadeIn 180ms cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up': 'sheetUp 240ms cubic-bezier(0.16, 1, 0.3, 1)',
        'sheet-up': 'sheetUp 240ms cubic-bezier(0.16, 1, 0.3, 1)',
        'modal-pop': 'modalPop 220ms cubic-bezier(0.16, 1, 0.3, 1)'
      }
    },
  },
  plugins: [],
}
