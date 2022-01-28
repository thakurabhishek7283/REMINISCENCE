import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Stack,
  Chip,
  IconButton,
  ButtonBase,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { likePost, deletePost } from "../../../actions/posts";
import { Delete, ThumbUpAlt, ThumbUpAltOutlined } from "@mui/icons-material";
import useStyles from "./styles";
import { useState } from "react";
import moment from "moment";

export default function Post({ post }) {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [likes, setLikes] = useState(post?.likes);

  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userId = user?.result?._id;
  const hasLikedPost = post.likes.find((like) => like === userId);

  const handleDelete = (post) => {
    dispatch(deletePost(post._id));
  };
  const handleLike = (post) => {
    dispatch(likePost(post._id));
    if (hasLikedPost) {
      setLikes(post.likes.filter((id) => id !== userId));
    } else {
      setLikes([...post.likes, userId]);
    }
  };

  const Likes = () => {
    if (likes.length > 0) {
      return likes.find((like) => like === userId) ? (
        <>
          <ThumbUpAlt fontSize="small" />
          &nbsp;
          {likes.length > 2
            ? `You and ${likes.length - 1} others`
            : `${likes.length} like${likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
          &nbsp;{likes.length} {likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }
  };

  const openPost = () => {
    navigate(`posts/${post._id}`);
  };
  return (
    <Grid item>
      <Card sx={{ width: 330 }} className={classes.card}>
        <ButtonBase
          component="span"
          name="test"
          className={classes.cardAction}
          onClick={openPost}
        >
          <CardMedia
            component="img"
            height="140"
            src={
              post.selectedFile ||
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            title={post.title}
            className={classes.media}
          />
          <div className={classes.overlay}>
            <Typography variant="h6">{post.name}</Typography>
            <Typography variant="body2">
              {moment(post.createdAt).fromNow()}
            </Typography>
          </div>
          <Stack direction="row" spacing={1}>
            {post.tags.length &&
              post.tags.map((tag, key) => {
                return <Chip key={key} label={tag.label} />;
              })}
          </Stack>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className={classes.title}
          >
            {post.title}
          </Typography>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {post.message.split(" ").splice(0, 20).join(" ")}...
            </Typography>
          </CardContent>
        </ButtonBase>
        <CardActions className={classes.cardActions}>
          <IconButton onClick={handleLike} disabled={!user?.result}>
            <Likes />
          </IconButton>
          {user?.result?._id === post?.creator && (
            <IconButton onClick={handleDelete}>
              <Delete />
            </IconButton>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
}
