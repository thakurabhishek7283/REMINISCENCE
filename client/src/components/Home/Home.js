import { Grid } from "@mui/material";
import CreatePost from "../CreatePost/CreatePost";
import SearchForm from "../SearchForm/SearchForm";
import Posts from "../Posts/Posts";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPostsBySearch } from "../../actions/posts";
import Paginate from "../Pagination/Pagination";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Home() {
  const navigate = useNavigate();
  const query = useQuery();
  const page = query.get("page") || 1;
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState("");

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags }));
      navigate(`/posts/search?searchQuery=${search || "none"}&tags=${tags}`);
    } else {
      navigate("/");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleTagSearch = (e) => {
    setTags(e.target.value);
  };
  return (
    <Grid container alignItems="stretch">
      <Posts />
      <Grid item xs={12} sm={4} md={3}>
        <CreatePost />
        <SearchForm
          onKeyPress={handleKeyPress}
          handleChange={handleChange}
          search={search}
          tags={tags}
          handleTagSearch={handleTagSearch}
        />
        {!searchQuery && !tags.length && (
          <Paper className={classes.pagination} elevation={6}>
            <Paginate page={page} />
          </Paper>
        )}
      </Grid>
    </Grid>
  );
}
