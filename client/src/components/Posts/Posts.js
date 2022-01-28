import { Grid, CircularProgress } from "@mui/material";
import Post from "./Post/Post";
import { useSelector } from "react-redux";

export default function Posts() {
  const { posts, isLoading } = useSelector((state) => state.posts);

  return isLoading ? (
    <CircularProgress color="secondary" />
  ) : (
    <Grid
      container
      item
      spacing={2}
      xs={12}
      sm={7}
      md={9}
      sx={{ display: "flexbox", flexDirection: "row", flexWrap: "wrap" }}
    >
      {posts.map((post) => (
        <Post post={post} key={post._id} />
      ))}
    </Grid>
  );
}
