/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Poppins', 'Noto Sans TC', 'sans-serif'],
        'display-zh': ['Noto Sans TC', 'sans-serif'],
      },
      colors: {
        vscode: {
          bg: 'var(--vscode-bg)',
          sidebar: 'var(--vscode-sidebar)',
          activity: 'var(--vscode-activity)',
          accent: 'var(--vscode-accent)',
          text: 'var(--vscode-text)',
          comment: 'var(--vscode-comment)',
          string: 'var(--vscode-string)',
          keyword: 'var(--vscode-keyword)',
          class: 'var(--vscode-class)',
          function: 'var(--vscode-function)'
        },
        primary: {
          400: '#60a5fa', 
          500: '#3b82f6', 
          600: '#2563eb', 
        },
        secondary: {
          400: '#a78bfa', 
          500: '#8b5cf6', 
          600: '#7c3aed', 
        },
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    }
  }
}
