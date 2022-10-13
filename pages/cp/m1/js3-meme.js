import { Box, Card, Container, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

// components
import HeaderBreadcrumbs from "../../../src/components/HeaderBreadcrumbs";
import Page from "../../../src/components/Page";
import Markdown from "../../../src/components/Markdown";
import Image from "../../../src/components/Image";
import { Widget } from "@typeform/embed-react";

const TitleStyle = styled("h3")(({ theme }) => ({
  ...theme.typography.h3,
  top: 0,
  zIndex: 10,
  width: "100%",
  position: "absolute",
  padding: theme.spacing(2),
  color: theme.palette.common.white,
  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(5),
  },
}));

const IframeStyle = styled("iframe")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  border: "none",
  zIndex: 10,
  width: "90%",
  height: "75%",
  position: "absolute",
  top: "55%",
  left: "50%",
  transform: "translate(-50%, -50%)",
}));

const OverlayStyle = styled("h1")(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 9,
  position: "absolute",
  backgroundColor: alpha(theme.palette.grey[900], 0.72),
}));

export default function JS3MemeGenerator() {
  return (
    <Page title="">
      <Container maxWidth="lg">
        <HeaderBreadcrumbs
          heading="Basic JS - Meme Generator"
          links={[
            { name: "CoderPrep", href: "/cp/m1" },
            { name: "Basic Programming", href: "/cp/m1" },
            { name: "Basic JS" },
          ]}
        />
        <Card>
          <Box sx={{ position: "relative" }}>
            <TitleStyle>Demo</TitleStyle>
            <IframeStyle
              src="/demo/cp/m1/js3-meme/index.html"
              title="JS 3 Meme Generator"
            />
            <OverlayStyle />
            <Image
              alt="post cover"
              src="https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              ratio="16/9"
            />
          </Box>

          <Box sx={{ p: { xs: 3, md: 5 } }}>
            <Typography variant="h6" sx={{ mb: 5 }}>
              Learn basic Javascript with practical projects.
            </Typography>

            <Markdown
              children={`
<h3>Instructions</h3>
<br/>
<p><b>TODO</b>: Here will be a step by step instruction to build the demo above.</p>
<br/>
<h3>Video</h3>
<br/>
<p><b>TODO</b>: Here will be a video to explain the thinking process of the intruction.</p>
<br/>
<h3>Challenges</h3>
<br/>
<p><b>TODO</b>: Here will be some quizzes or challenges to enhance or add new features to the demo.</p>
<br/>
              `}
            />

            <Widget
              id="CxTZCC6G"
              style={{ height: "500px" }}
              className="my-form"
              hidden={{
                product_id: "js3-meme",
              }}
            />
          </Box>
        </Card>
      </Container>
    </Page>
  );
}
