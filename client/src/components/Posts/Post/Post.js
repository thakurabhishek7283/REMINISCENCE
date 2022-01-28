import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  Grid,
  Stack,
  Chip,
  IconButton,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { likePost, deletePost } from "../../../actions/posts";
import {
  DeleteIcon,
  ThumbUpAltIcon,
  ThumbUpAltOutlined,
} from "@mui/icons-material";

export default function Post({ post }) {
  const dispatch = useDispatch();

  const handleDelete = (post) => {
    dispatch(deletePost(post._id));
  };
  const handleLike = (post) => {
    dispatch(likePost(post._id));
  };

  const Likes = () => {
    if (likes.length > 0) {
      return likes.find((like) => like === userId) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
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

  return (
    <Grid item>
      <Card sx={{ width: 330 }}>
        <CardMedia
          component="img"
          height="140"
          src={post.image}
          alt={post.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.message}
          </Typography>
          <Stack direction="row" spacing={1}>
            {post.tags.length &&
              postData.tags.map((tag, key) => {
                return <Chip key={key} label={tag.label} />;
              })}
          </Stack>
        </CardContent>
        <CardActions>
          <IconButton onClick={handleLike}>
            <Likes />
          </IconButton>

          <IconButton onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
