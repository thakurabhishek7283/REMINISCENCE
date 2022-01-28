import { Grid } from "@mui/material";
import CreatePost from "../CreatePost/CreatePost";
import SearchForm from "../SearchForm/SearchForm";
import Posts from "../Posts/Posts";

export default function Home() {
  return (
    <Grid container alignItems="stretch">
      <Posts />
      <Grid item xs={12} sm={4} md={3}>
        <CreatePost />
        <SearchForm />
      </Grid>
    </Grid>
  );
}
