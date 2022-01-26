import {
  FormControl,
  Paper,
  TextField,
  Button,
  Typography,
} from "@mui/material";

function SearchForm() {
  return (
    <Paper elevation={3} sx={{ padding: 2, minWidth: 300, mt: 2 }}>
      <FormControl fullWidth>
        <Typography variant="h6" align="center" sx={{ mb: 1 }}>
          Search Memories
        </Typography>
        <TextField id="title" variant="outlined" label="Memory" />
        <TextField id="tags" variant="outlined" label="tags" />
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
