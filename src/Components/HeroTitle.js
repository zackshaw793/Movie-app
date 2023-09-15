import * as React from "react"
import { Box, Typography } from "@mui/material"
export default function HeroCenter({
  decorative = "A Star Wars Database",
  title = "Star Wars Compendium",
  subtitle = "Leave Reviews and ratings for the entire Star Wars Saga.",
}) {
  return (
    <Box
      sx={{
        flex: 1,
        height: "60vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 2,
        my: 6,
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          color: "primary.500",
          fontWeight: 600,
          fontSize: "sm",
          textTransform: "uppercase",
          letterSpacing: 0.5,
        }}
      >
        {decorative}
      </Box>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "4xl", sm: "5xl", md: "6xl" },
          fontWeight: 800,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: "lg",
          color: "gray.500",
          maxWidth: "54ch",
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  )
}