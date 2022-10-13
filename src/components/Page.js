import { forwardRef } from "react";
// next
import Head from "next/head";
// @mui
import { Box } from "@mui/material";

// eslint-disable-next-line react/display-name
const Page = forwardRef(({ children, title = "", meta, ...other }, ref) => (
  <>
    <Head>
      <title>{`${title} | CoderSchool`}</title>
      {meta}
    </Head>

    <Box ref={ref} {...other}>
      <br />
      {children}
    </Box>
  </>
));

export default Page;
