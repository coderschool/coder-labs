import { paramCase } from "change-case";
// next
import NextLink from "next/link";
// @mui
import { alpha, styled } from "@mui/material/styles";
import {
  Box,
  Card,
  Avatar,
  Typography,
  CardContent,
  Link,
  Stack,
} from "@mui/material";
// hooks
import useResponsive from "../../../hooks/useResponsive";
// utils
import { fDate } from "../../../utils/formatTime";
import { fShortenNumber } from "../../../utils/formatNumber";
// components
import Image from "../../Image";
import Iconify from "../../Iconify";
import TextMaxLine from "../../TextMaxLine";
import SvgIconStyle from "../../SvgIconStyle";
import TextIconLabel from "../../TextIconLabel";

// ----------------------------------------------------------------------

const OverlayStyle = styled("div")(({ theme }) => ({
  top: 0,
  zIndex: 1,
  width: "100%",
  height: "100%",
  position: "absolute",
  backgroundColor: alpha(theme.palette.grey[900], 0.8),
}));

// ----------------------------------------------------------------------

export default function BlogPostCard({ post, index }) {
  const isDesktop = useResponsive("up", "md");

  const { cover, title, view, path, author, createdAt } = post;

  const latestPost = index === 0 || index === 1 || index === 2;

  if (isDesktop && latestPost) {
    return (
      <Card>
        <Avatar
          alt={author.name}
          src={author.avatarUrl}
          sx={{
            zIndex: 9,
            top: 24,
            left: 24,
            width: 40,
            height: 40,
            position: "absolute",
          }}
        />
        <PostContent
          title={title}
          view={view}
          path={path}
          createdAt={createdAt}
          index={index}
        />
        <OverlayStyle />
        <Image alt="cover" src={cover} sx={{ height: 360 }} />
      </Card>
    );
  }

  return (
    <Card>
      <Box sx={{ position: "relative" }}>
        <SvgIconStyle
          src="/assets/shape-avatar.svg"
          sx={{
            width: 80,
            height: 36,
            zIndex: 9,
            bottom: -15,
            position: "absolute",
            color: "background.paper",
          }}
        />
        <Avatar
          alt={author.name}
          src={author.avatarUrl}
          sx={{
            left: 24,
            zIndex: 9,
            width: 32,
            height: 32,
            bottom: -16,
            position: "absolute",
          }}
        />
        <Image alt="cover" src={cover} ratio="4/3" />
      </Box>

      <PostContent
        title={title}
        view={view}
        path={path}
        createdAt={createdAt}
      />
    </Card>
  );
}

export function PostContent({ title, view, path, createdAt, index }) {
  const isDesktop = useResponsive("up", "md");

  const linkTo = path;

  const latestPostLarge = index === 0;
  const latestPostSmall = index === 1 || index === 2;
  // const latestPostLarge = false;
  // const latestPostSmall = false;

  const POST_INFO = [
    { number: view, icon: "eva:eye-fill" },
    // { number: comment, icon: "eva:message-circle-fill" },
    // { number: share, icon: "eva:share-fill" },
  ];

  return (
    <CardContent
      sx={{
        pt: 4.5,
        width: 1,
        ...((latestPostLarge || latestPostSmall) && {
          pt: 0,
          zIndex: 9,
          bottom: 0,
          position: "absolute",
          color: "common.white",
        }),
      }}
    >
      <Typography
        gutterBottom
        variant="caption"
        component="div"
        sx={{
          color: "text.disabled",
          ...((latestPostLarge || latestPostSmall) && {
            opacity: 0.64,
            color: "common.white",
          }),
        }}
      >
        {fDate(createdAt)}
      </Typography>

      <NextLink href={linkTo} passHref>
        <Link color="inherit">
          <TextMaxLine
            variant={isDesktop && latestPostLarge ? "h5" : "subtitle2"}
            // variant="h5"
            line={2}
            persistent
          >
            {title}
          </TextMaxLine>
        </Link>
      </NextLink>

      <Stack
        flexWrap="wrap"
        direction="row"
        justifyContent="flex-end"
        sx={{
          mt: 3,
          color: "text.disabled",
          ...((latestPostLarge || latestPostSmall) && {
            opacity: 0.64,
            color: "common.white",
          }),
        }}
      >
        {POST_INFO.map((info, index) => (
          <TextIconLabel
            key={index}
            icon={
              <Iconify
                icon={info.icon}
                sx={{ width: 16, height: 16, mr: 0.5 }}
              />
            }
            value={fShortenNumber(info.number)}
            sx={{ typography: "caption", ml: index === 0 ? 0 : 1.5 }}
          />
        ))}
      </Stack>
    </CardContent>
  );
}
