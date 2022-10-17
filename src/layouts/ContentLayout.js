import { Container } from "@mui/material";
import { useRouter } from "next/router";
import { useMemo, useRef } from "react";

const ContentLayout = ({ children }) => {
  const router = useRouter();
  const isWV = useMemo(
    () => router.pathname.startsWith("/wv"),
    [router.pathname]
  );

  return (
    <>
      {isWV ? (
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
