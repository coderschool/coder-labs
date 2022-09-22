import { Box, Fade, Stack, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";

import Image from "../src/components/Image";
import Page from "../src/components/Page";

export default function Page404() {
  const router = useRouter();

  return (
    <Page title="404 Page Not Found">
      <Fade in>
        <Box
          sx={{
            display: "grid",
            placeItems: "center",
            minHeight: "unset",
          }}
        >
          <Stack alignItems="center" spacing={2}>
            <Image
              alt="empty_state"
              src="/assets/empty_states-09.svg"
              sx={{ maxWidth: 480, width: "100%" }}
            />
            <Typography align="center" whiteSpace="break-spaces">
              Sorry, we couldn’t find the page you’re looking for
            </Typography>

            <Button
              size="large"
              variant="contained"
              onClick={() => router.back()}
            >
              Go Back
            </Button>
          </Stack>
        </Box>
      </Fade>
    </Page>
  );
}
