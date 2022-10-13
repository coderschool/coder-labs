import { Container, Grid } from "@mui/material";
import React from "react";
import HeaderBreadcrumbs from "../../../src/components/HeaderBreadcrumbs";
import Page from "../../../src/components/Page";
import BlogPostCard from "../../../src/components/sections/blog/BlogPostCard";
import SkeletonPostItem from "../../../src/components/skeleton/SkeletonPostItem";

const posts = [
  {
    id: "ga1-intro",
    cover:
      "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Generative Art - Intro to Canvas",
    path: "/cp/m1/ga1-intro",
    author: {
      name: "Minh Do",
      avatarUrl:
        "http://res.cloudinary.com/ddawlo98i/image/upload/v1649697021/coder_comm/qd0h6slrvqvovdpmlnox.png",
    },
    createdAt: new Date(2022, 9, 12),
  },
  {
    id: "ga2-matrix-rain",
    cover:
      "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Generative Art - Matrix Rain",
    path: "/cp/m1/ga2-matrix-rain",
    author: {
      name: "Minh Do",
      avatarUrl:
        "http://res.cloudinary.com/ddawlo98i/image/upload/v1649697021/coder_comm/qd0h6slrvqvovdpmlnox.png",
    },
    createdAt: new Date(2022, 9, 12),
  },
  {
    id: "ga3-drawing",
    cover:
      "https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Generative Art - Drawing with code",
    path: "/cp/m1/ga3-drawing",
    author: {
      name: "Minh Do",
      avatarUrl:
        "http://res.cloudinary.com/ddawlo98i/image/upload/v1649697021/coder_comm/qd0h6slrvqvovdpmlnox.png",
    },
    createdAt: new Date(2022, 9, 12),
  },
  {
    id: "ga4-particle-text",
    cover:
      "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Generative Art - Particle Text",
    path: "/cp/m1/ga4-particle-text",
    author: {
      name: "Minh Do",
      avatarUrl:
        "http://res.cloudinary.com/ddawlo98i/image/upload/v1649697021/coder_comm/qd0h6slrvqvovdpmlnox.png",
    },
    createdAt: new Date(2022, 9, 12),
  },
  {
    id: "js2-interest",
    cover:
      "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Basic JS - Interest Calculator",
    path: "/cp/m1/js2-interest",
    author: {
      name: "Minh Do",
      avatarUrl:
        "http://res.cloudinary.com/ddawlo98i/image/upload/v1649697021/coder_comm/qd0h6slrvqvovdpmlnox.png",
    },
    createdAt: new Date(2022, 9, 12),
  },
  {
    id: "js3-meme",
    cover:
      "https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Basic JS - Meme Generator",
    path: "/cp/m1/js3-meme",
    author: {
      name: "Minh Do",
      avatarUrl:
        "http://res.cloudinary.com/ddawlo98i/image/upload/v1649697021/coder_comm/qd0h6slrvqvovdpmlnox.png",
    },
    createdAt: new Date(2022, 9, 12),
  },
  {
    id: "js4-quiz",
    cover:
      "https://images.pexels.com/photos/3484061/pexels-photo-3484061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Basic JS - Quiz App",
    path: "/cp/m1/js4-quiz",
    author: {
      name: "Minh Do",
      avatarUrl:
        "http://res.cloudinary.com/ddawlo98i/image/upload/v1649697021/coder_comm/qd0h6slrvqvovdpmlnox.png",
    },
    createdAt: new Date(2022, 9, 12),
  },
  {
    id: "js1-cards",
    cover:
      "https://images.pexels.com/photos/273935/pexels-photo-273935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Basic JS - Cards",
    path: "/cp/m1/js1-cards",
    author: {
      name: "Minh Do",
      avatarUrl:
        "http://res.cloudinary.com/ddawlo98i/image/upload/v1649697021/coder_comm/qd0h6slrvqvovdpmlnox.png",
    },
    createdAt: new Date(2022, 9, 12),
  },
  {
    id: "game1-stick-hero",
    cover:
      "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Game - Stick Hero",
    path: "/cp/m1/game1-stick-hero",
    author: {
      name: "Minh Do",
      avatarUrl:
        "http://res.cloudinary.com/ddawlo98i/image/upload/v1649697021/coder_comm/qd0h6slrvqvovdpmlnox.png",
    },
    createdAt: new Date(2022, 9, 12),
  },
  {
    id: "gas1-tictactoe",
    cover:
      "https://images.pexels.com/photos/1757363/pexels-photo-1757363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Google App Script - Tic Tac Toe on Google Sheets",
    path: "/cp/m1/gas1-tictactoe",
    author: {
      name: "Minh Do",
      avatarUrl:
        "http://res.cloudinary.com/ddawlo98i/image/upload/v1649697021/coder_comm/qd0h6slrvqvovdpmlnox.png",
    },
    createdAt: new Date(2022, 9, 12),
  },
];

export default function CoderPrepUnits() {
  return (
    <Page title="CoderPrep: Units">
      <Container maxWidth="lg">
        <HeaderBreadcrumbs
          heading="CoderPrep - Basic Programming"
          links={[
            { name: "CoderPrep" },
            { name: "Basic Programming" },
            { name: "Topics" },
          ]}
        />
        <Grid container spacing={3}>
          {(!posts.length ? [...Array(12)] : posts).map((post, index) =>
            post ? (
              <Grid
                key={post.id}
                item
                xs={12}
                sm={6}
                md={(index === 0 && 6) || 3}
              >
                <BlogPostCard post={post} index={index} />
              </Grid>
            ) : (
              <SkeletonPostItem key={index} />
            )
          )}
        </Grid>
      </Container>
    </Page>
  );
}
