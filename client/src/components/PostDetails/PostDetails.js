import {
  Card,
  CardMedia,
  Divider,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import photo from "../../images/iguana.jpg";

export default function PostDetails() {
  return (
    <Paper elevation={6} sx={{ borderRadius: 4 }}>
      <Box
        sx={{
          display: "flex",
          padding: 3,
          flexDirection: "row",
          flexWrap: "wrap",
          flexGrow: "1 1",
        }}
      >
        <div style={{ maxWidth: "760px" }}>
          <Typography variant="h3" component="h3">
            Post Title
          </Typography>
          <Typography variant="h6" component="h6">
            #tag1, #tag2
          </Typography>
          <Typography variant="body1" component="p">
            this is the message that you'll provide when posting a memory which
            will describe what you've been through those moments
          </Typography>
          <Typography variant="h6" component="h6">
            created by
          </Typography>
          <Typography variant="body1" component="p">
            created at
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
        </div>
        <div style={{ marginLeft: "20px", justifySelf: "flex-end" }}>
          <Card>
            <CardMedia component="img" image={photo} height="350" />
          </Card>
        </div>
      </Box>
    </Paper>
  );
}
