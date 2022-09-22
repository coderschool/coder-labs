import { forwardRef } from "react";
import { Box } from "@mui/material";
import NextLink from "next/link";

const Logo = forwardRef(({ disabledLink = false, compact = true, sx }, ref) => {
  const logo = (
    <Box
      ref={ref}
      component="img"
      src={
        compact
          ? "/assets/coderschool-logo-compact.svg"
          : "/assets/coderschool-logo.svg"
      }
      sx={{ width: 40, height: 40, cursor: "pointer", ...sx }}
    />
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <NextLink href="/">{logo}</NextLink>;
});

export default Logo;
