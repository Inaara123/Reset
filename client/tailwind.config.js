/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkblue: "#2131c8",
        firebrick: "rgba(206, 19, 18, 0.8)",
        slateblue: "#6a45be",
        darkorchid: "#7730c1",
        blueviolet: {
          "100": "#4a46ff",
          "200": "rgba(74, 70, 255, 0.3)",
        },
        gray: {
          "100": "#8c8c8c",
          "200": "#152344",
          "300": "rgba(21, 35, 68, 0.76)",
          "400": "rgba(21, 35, 68, 0.15)",
          "500": "rgba(0, 0, 0, 0)",
        },
        mediumseagreen: {
          "100": "#4db17b",
          "200": "#339d51",
          "300": "rgba(51, 157, 81, 0.55)",
        },
        royalblue: "#4269d2",
        lightcyan: {
          "100": "#cef3fe",
          "200": "#cfeffa",
        },
        darkslateblue: {
          "100": "#6c3984",
          "200": "#3c3b84",
          "300": "#312c65",
        },
        cadetblue: "#558a74",
        lightskyblue: "#adc3fd",
        midnightblue: "#27004f",
        darkslategray: "#172b4d",
        mediumslateblue: "#6a67ff",
      },
      spacing: {},
      fontFamily: {
        outfit: "Outfit",
        "dm-sans": "'DM Sans'",
        "orelega-one": "'Orelega One'",
      },
      borderRadius: {
        xl: "20px",
        "31xl": "50px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      xl: "20px",
      "5xl": "24px",
      lgi: "19px",
      "29xl": "48px",
      "19xl": "38px",
      "21xl": "40px",
      "13xl": "32px",
      "11xl": "30px",
      lg: "18px",
      "7xl": "26px",
      "53xl": "72px",
      "24xl": "43px",
      "39xl": "58px",
      "9xl": "28px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};