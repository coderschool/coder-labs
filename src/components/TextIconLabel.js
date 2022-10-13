// @mui
import { Stack } from "@mui/material";

// ----------------------------------------------------------------------

export default function TextIconLabel({
  icon,
  value,
  endIcon = false,
  sx,
  ...other
}) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        typography: "body2",
        ...sx,
      }}
      {...other}
    >
      {!endIcon && icon}
      {value}
      {endIcon && icon}
    </Stack>
  );
}
