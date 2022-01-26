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
} from "@mui/material";
import iguana from "../../../images/iguana.jpg";

export default function Post() {
  return (
    <Grid item>
      <Card sx={{ width: 330 }}>
        <CardMedia
          component="img"
          height="140"
          image={iguana}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          {/* <Stack direction="row" spacing={1}>
            {postData.tags.length
              ? postData.tags.map((tag, key) => {
                  return <Chip key={key} label={tag.label} />;
                })
              : null}
          </Stack> */}
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
