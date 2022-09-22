import PropTypes from "prop-types";
// @mui
import { alpha } from "@mui/material/styles";
import { Paper, CardHeader, Box, Typography } from "@mui/material";

export function Block({ title, sx, children }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        borderRadius: 1.5,
        bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
      }}
    >
      {title && <CardHeader title={title} />}
      <Box
        sx={{
          p: 3,
          minHeight: 180,
          ...sx,
        }}
      >
        {children}
      </Box>
    </Paper>
  );
}

// ----------------------------------------------------------------------

export function Label({ title }) {
  return (
    <Typography
      variant="overline"
      component="p"
      gutterBottom
      sx={{ color: "text.secondary" }}
    >
      {title}
    </Typography>
  );
}
