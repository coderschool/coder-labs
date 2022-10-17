import { Container } from "@mui/material";
import { useRouter } from "next/router";

const ContentLayout = ({ children }) => {
  const router = useRouter();
  const isWV = router.pathname.startsWith("/wv");

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
