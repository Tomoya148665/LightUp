/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        royalblue: {
          "100": "#1f74ec",
          "200": "#0075fe",
        },
        gray: {
          "100": "#17243e",
          "200": "#1e1e1e",
        },
        black: "#23272c",
        "light-border-grey": "#e0e4ea",
        darkgray: {
          "100": "#969da6",
          "200": "#979797",
        },
        darkslategray: {
          "100": "#3a414a",
          "200": "#343942",
        },
        lavender: "#f3eefe",
        "text-light": "#8a8a8d",
        "text-dart": "#000",
        ultralight: "#f4f5f7",
        "orange-normal": "#faab3c",
        "green-accent": "#0eb01d",
        mediumblue: "#4e1bd9",
        mediumslateblue: "#9566f2",
        lime: "#23eb31",
        dimgray: "#5d6675",
        gainsboro: "#d8d8d8",
      },
      spacing: {},
      fontFamily: {
        "libre-franklin": "'Libre Franklin'",
        mulish: "Mulish",
        "font-awesome-6-pro": "'Font Awesome 6 Pro'",
        roboto: "Roboto",
      },
      borderRadius: {
        xl: "20px",
        "3xl": "22px",
        "mid-6": "17.6px",
        "3xs-6": "9.6px",
        "81xl": "100px",
        mini: "15px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      smi: "13px",
      xs: "12px",
      "13xl": "32px",
      lg: "18px",
      mid: "17px",
      "3xl": "22px",
      "smi-8": "12.8px",
      "mid-6": "17.6px",
      xl: "20px",
      "23xl": "42px",
      "3xs": "10px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
