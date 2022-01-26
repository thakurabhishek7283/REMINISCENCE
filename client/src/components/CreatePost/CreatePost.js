import {
  FormControl,
  Paper,
  TextField,
  Button,
  Typography,
} from "@mui/material";

export default function CreatePost() {
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  async function handleFileChange(e) {
    const file = e.target.files[0];
    const base64file = await toBase64(file);
    console.log(base64file);
  }
  return (
    <Paper elevation={9} sx={{ padding: 2, minWidth: 300 }}>
      <Typography variant="h6" align="center" sx={{ mb: 1 }}>
        Creating a Memory
      </Typography>
      <FormControl fullWidth>
        <TextField id="title" variant="outlined" label="title" />
        <TextField id="message" variant="outlined" label="message" />

        <TextField id="tags" variant="outlined" label="comma separated tags" />
        <input id="FileUpload" type="file" onChange={handleFileChange} />
        <Button
          variant="contained"
          color="success"
          sx={{ marginY: 1, marginX: 2 }}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginBottom: 1, marginX: 2 }}
        >
          Clear
        </Button>
      </FormControl>
    </Paper>
  );
}
