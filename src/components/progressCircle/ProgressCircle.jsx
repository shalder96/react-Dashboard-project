import { Box, useTheme } from "@mui/material";

const ProgressCircle = ({ progress = 0.75, size = 40 }) => {
  const theme = useTheme();
  const angle = progress * 360;

  // choose adaptive colors from theme palette
  const trackColor =
    theme.palette.mode === "dark"
      ? theme.palette.background.default
      : theme.palette.grey[200];

  const progressColor = theme.palette.primary.main;
  const baseColor = theme.palette.secondary.main;

  return (
    <Box
      sx={{
        background: `
          radial-gradient(${trackColor} 55%, transparent 56%),
          conic-gradient(${progressColor} 0deg ${angle}deg, ${baseColor} ${angle}deg 360deg)
        `,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
        boxShadow:
          theme.palette.mode === "dark"
            ? "0 0 8px rgba(0,0,0,0.6)"
            : "0 0 8px rgba(0,0,0,0.1)",
      }}
    />
  );
};

export default ProgressCircle;
