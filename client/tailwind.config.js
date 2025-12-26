/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      'xs': '480px',     
      'sm': '640px',     
      'md': '768px',     
      'lg': '1024px',   
      'xl': '1280px',    
      '2xl': '1536px',   
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        buttonOrange: "#FC7C13",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        sourceSans: ["Source Sans 3", "sans-serif"], 
      },
      backgroundImage: {
        "custom-radial": "radial-gradient(circle, #2bb102, #0B2F01 80%)",
        "input-gradient": "(circle, #2bb102, #0B2F01 80%)",
        'footer-bg': "url('/footerbg.png')",
        'spinning-bg': "url('/spinnigbg.png')",
      },
      width: {
        'sidebar-desktop': '932px',
        'sidebar-tablet': '700px',
        'sidebar-mobile': '500px',
        'sidebar-small': '400px',
        'menu-desktop': '635px',
        'menu-tablet': '500px',
        'menu-mobile': '350px',
        'menu-small': '280px',
      },
      height: {
        'sidebar-desktop': '932px',
        'sidebar-tablet': '700px',
        'sidebar-mobile': '500px',
        'sidebar-small': '400px',
        'menu-desktop': '582px',
        'menu-tablet': '450px',
        'menu-mobile': '320px',
        'menu-small': '260px',
      },
      spacing: {
        // Additional spacing values for precise positioning
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
