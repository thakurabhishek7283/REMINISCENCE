import {
  FormControl,
  Paper,
  TextField,
  Button,
  Typography,
} from "@mui/material";

function SearchForm(props) {
  return (
    <Paper elevation={3} sx={{ padding: 2, minWidth: 300, mt: 2 }}>
      <FormControl fullWidth>
        <Typography variant="h6" align="center" sx={{ mb: 1 }}>
          Search Post
        </Typography>
        <TextField
          id="title"
          variant="outlined"
          label="Search Title"
          value={props.search}
          onKeyDown={props.handleKeyPress}
          onChange={props.handleChange}
        />
        <TextField
          id="tags"
          variant="outlined"
          label="tags"
          value={props.tags}
          onChange={props.handleTagSearch}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ marginY: 1, marginX: 2 }}
        >
          Search
        </Button>
      </FormControl>
    </Paper>
  );
}

export default SearchForm;
