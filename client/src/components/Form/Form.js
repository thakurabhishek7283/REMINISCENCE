import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  OutlinedInput,
  InputAdornment,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ChipInput from "../Home/Chip";
import { createPost, updatePost } from "../../actions/posts";
import useStyles from "./styles";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: [],
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId
      ? state.posts.posts.find((message) => message._id === currentId)
      : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  const navigate = useNavigate();
  const [ttags, setTags] = useState([]);

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const clear = () => {
    setCurrentId(0);
    setPostData({ title: "", message: "", tags: [], selectedFile: "" });
  };

  useEffect(() => {
    if (!post?.title) clear();
    if (post) setPostData(post);
  }, [post]);

  async function handleFileChange(e) {
    const file = e.target.files[0];
    const base64file = await toBase64(file);
    setPostData({ ...postData, selectedFile: base64file });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(
        createPost(
          { ...postData, tags: ttags, name: user?.result?.name },
          navigate
        )
      );
      clear();
    } else {
      dispatch(
        updatePost(currentId, {
          ...postData,
          tags: ttags,
          name: user?.result?.name,
        })
      );
      clear();
    }
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
  const handleAddChip = (e) => {
    if (e.target.value.includes(",")) {
      const anothArray = e.target.value.split(",");
      const tagArray = anothArray[0];
      setTags((prev) => {
        return [...prev, tagArray];
      });
      e.target.value = "";
    }
  };
  const handleDeleteChip = (tag) => {
    setTags((prev) => {
      return prev.filter((value) => value !== tag);
    });
  };

  return (
    <Paper className={classes.paper} elevation={6}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? `Editing "${post?.title}"` : "Creating a Memory"}
        </Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <div style={{ padding: "5px 0", width: "94%" }}>
          <FormControl fullWidth>
            <InputLabel htmlFor="chip-input">Tags(comma seprated)</InputLabel>
            <OutlinedInput
              id="chip-input"
              type="text"
              startAdornment={
                <InputAdornment position="start">
                  {ttags.map((tag, index) => {
                    return tag ? (
                      <ChipInput
                        key={index}
                        tag={tag}
                        handleDeleteChip={handleDeleteChip}
                      />
                    ) : null;
                  })}
                </InputAdornment>
              }
              onChange={handleAddChip}
            />
          </FormControl>
        </div>
        <div className={classes.fileInput}>
          <input name="FileUpload" type="file" onChange={handleFileChange} />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
