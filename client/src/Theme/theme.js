import theme from "styled-theming";

export const backgroundColor = theme("mode", {
  light: "#fafafa",
  dark: "#222"
});

export const textColor = theme("mode", {
  light: "#000",
  dark: "#fff"
});

export const buttonBackgroundColor = theme("mode", {
  light: "#222",
  dark: "#eee"
});

export const buttonTextColor = theme("mode", {
  light: "#eee",
  dark: "#222"
});

/* ------------------ PRIMARY COLORS ------------------*/
export const primaryDark = theme("mode", {
  light: "#0D47A1",
  dark: "#0D47A1"
});
export const primaryDefault = theme("mode", {
  light: "#1A8EFF",
  dark: "#1A8EFF"
});
export const primaryHover = theme("mode", {
  light: "#3C9FFF",
  dark: "#3C9FFF"
});
export const primaryLight = theme("mode", {
  light: "#78DAFF",
  dark: "#78DAFF"
});

/* ------------------ ACTIVE COLORS ------------------*/
export const activeNavigation = theme("mode", {
  light: "#B5E5FD",
  dark: "#B5E5FD"
});
export const inactive = theme("mode", {
  light: "#C7C7D6",
  dark: "#4D4D56"
});
export const activeContent = theme("mode", {
  light: "#FFC700",
  dark: "#B08C0A"
});

/* ------------------ SELECT COLORS ------------------*/
export const paragraphInlineCodeBG = theme("mode", {
  light: "#CFEEFD",
  dark: "#00274E"
});
export const paragraphMarker = theme("mode", {
  light: "#FFEA87",
  dark: "#604B00"
});
/* ------------------ ALERT COLORS ------------------*/
export const alertWarning = theme("mode", {
  light: "#FF0700",
  dark: "#FF0700"
});
export const alertCaution = theme("mode", {
  light: "#FFDF47",
  dark: "#FFDF47"
});
export const alertInfo = theme("mode", {
  light: "#2F80ED",
  dark: "#2F80ED"
});
export const alertConfirm = theme("mode", {
  light: "#08FFA8",
  dark: "#08FFA8"
});

/* ------------------ TEXT COLORS ------------------*/
export const textPrimary = theme("mode", {
  light: "#33363B",
  dark: "#CBD0D0"
});
export const textHeader = theme("mode", {
  light: "#000000",
  dark: "#FFFFFF"
});
export const textBold = theme("mode", {
  light: "#000000",
  dark: "#FFFFFF"
});
export const textHint = theme("mode", {
  light: "#B0B0B5",
  dark: "#8A8A93"
});
export const textInactive = theme("mode", {
  light: "#C7C7D6",
  dark: "#4D4D56"
});
export const textHyperlink = theme("mode", {
  light: "#1A8EFF",
  dark: "#1A8EFF"
});
export const textInlineCode = theme("mode", {
  light: "#0863BB",
  dark: "#78DAFF"
});

/* ------------------ BACKGROUND COLORS ------------------*/
export const absoluteContrast = theme("mode", {
  light: "#FFFFFF",
  dark: "#000000"
});

export const primaryBackground = theme("mode", {
  light: "#FAFAFA",
  dark: "#18191D"
});
export const secondaryBackground = theme("mode", {
  light: "#F0F0F0",
  dark: "#121314"
});

/* ------------------ SHADOWS COLORS ------------------*/
export const shadows = theme("mode", {
  light: "rgba(0, 0, 0, 0.25)",
  dark: "rgba(0, 0, 0, 0.75)"
});
