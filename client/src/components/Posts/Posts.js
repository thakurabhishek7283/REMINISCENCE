import { Grid } from "@mui/material";
import Post from "./Post/Post";

export default function Posts() {
  return (
    <Grid
      container
      item
      spacing={2}
      xs={12}
      sm={9}
      sx={{ display: "flexbox", flexDirection: "row", flexWrap: "wrap" }}
    >
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Grid>
  );
}
