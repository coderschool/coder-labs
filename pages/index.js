import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";

// hooks
import useIsMountedRef from "../src/hooks/useIsMountedRef";
// utils
import axios from "../src/utils/axios";
// mui
import { alpha, styled } from "@mui/material/styles";
import { Typography, Container, Box } from "@mui/material";
import { TreeView, TreeItem, treeItemClasses } from "@mui/lab";

// components
import Page from "../src/components/Page";
import Logo from "../src/components/Logo";
import { Block } from "../src/components/sections/Block";

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15),
}));

const TreeViewStyle = styled(TreeView)({
  height: 240,
  flexGrow: 1,
  maxWidth: 400,
});

const StyledTreeItem = styled((props) => <TreeItem {...props} />)(
  ({ theme }) => ({
    [`& .${treeItemClasses.iconContainer}`]: {
      "& .close": {
        opacity: 0.3,
      },
    },
    [`& .${treeItemClasses.group}`]: {
      marginLeft: 15,
      paddingLeft: 18,
      borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
    },
  })
);

export default function CourseDetail() {
  const isMountedRef = useIsMountedRef();
  const router = useRouter();

  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  const getCourses = useCallback(async () => {
    try {
      const response = await axios.get(`/api/courses`);

      if (isMountedRef.current) {
        setCourses(response.data);
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getCourses();
  }, [getCourses]);

  const handleClickNode = (pathname) => {
    if (pathname) {
      router.push(pathname);
    }
  };

  const renderTree = (nodes) => (
    <StyledTreeItem
      key={nodes.id}
      nodeId={nodes.id}
      label={nodes.title}
      onClick={() => handleClickNode(nodes.path)}
    >
      {Array.isArray(nodes.courseUnits)
        ? nodes.courseUnits.map((node) => renderTree(node))
        : null}
    </StyledTreeItem>
  );

  return (
    <Page title="Courses">
      <Container>
        {error && <Typography variant="h6">404 {error}!</Typography>}

        <Typography variant="h2" sx={{ display: "flex", alignItems: "center" }}>
          <Logo disabledLink sx={{ display: "inline-block", mr: 2 }} /> Welcome
          to CoderSchool
        </Typography>

        <RootStyle>
          <Box
            sx={{
              display: "grid",
              gap: 3,
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                md: "repeat(3, 1fr)",
              },
            }}
          >
            {courses.length ? (
              courses.map((course) => (
                <Block key={course.id} title={course.title}>
                  <TreeViewStyle defaultExpanded={[course.id]}>
                    {course.courseUnits?.length ? (
                      renderTree(course)
                    ) : (
                      <Typography variant="subtitle2">No Lab found.</Typography>
                    )}
                  </TreeViewStyle>
                </Block>
              ))
            ) : (
              <Typography variant="h6">No course found!</Typography>
            )}
          </Box>
        </RootStyle>
      </Container>
    </Page>
  );
}
