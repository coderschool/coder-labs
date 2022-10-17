import { Container } from "@mui/material";
import { useRouter } from "next/router";
import { useRef } from "react";

const ContentLayout = ({ children }) => {
  const router = useRouter();
  const isWV = useRef(router.pathname.startsWith("/wv"));

  return (
    <>
      {isWV.current ? (
        <Container className="wv-content__container">
          <main>{children}</main>
        </Container>
      ) : (
        <main>{children}</main>
      )}
    </>
  );
};

export default ContentLayout;
