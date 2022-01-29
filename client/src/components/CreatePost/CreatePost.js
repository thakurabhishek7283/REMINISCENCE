import {
  FormControl,
  Paper,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { createPost } from "../../actions/posts";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: [],
    selectedFile: "",
  });
  const clear = () => {
    setPostData({ title: "", message: "", tags: [], selectedFile: "" });
  };
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  async function handleFileChange(e) {
    const file = e.target.files[0];
    const base64file = await toBase64(file);
    setPostData({ ...postData, selectedFile: base64file });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({ ...postData, name: user?.result?.name }, navigate));
    clear();
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper} elevation={6}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own memories and like other's memories.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper elevation={9} sx={{ padding: 2, minWidth: 300 }}>
      <Typography variant="h6" align="center" sx={{ mb: 1 }}>
        Creating a Memory
      </Typography>
      <FormControl fullWidth>
        <TextField
          name="title"
          variant="outlined"
          label="title"
          value={postData.title}
          onChange={handleChange}
        />
        <TextField
          name="message"
          variant="outlined"
          label="message"
          multiline
          value={postData.message}
          onChange={handleChange}
        />

        <TextField
          name="tags"
          variant="outlined"
          label="comma separated tags"
          value={postData.tags}
          onChange={handleChange}
        />
        <input name="FileUpload" type="file" onChange={handleFileChange} />
        <Button
          variant="contained"
          color="success"
          sx={{ marginY: 1, marginX: 2 }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginBottom: 1, marginX: 2 }}
          onClick={clear}
        >
          Clear
        </Button>
      </FormControl>
    </Paper>
  );
}
