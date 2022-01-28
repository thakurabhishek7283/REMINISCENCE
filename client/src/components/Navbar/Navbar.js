import { ThemeContext } from "@emotion/react";
import { AppBar, Typography, Button, Toolbar } from "@mui/material";

export default function NavBar() {
  return (
    <AppBar position="static" sx={{ borderRadius: 5, marginY: 3, paddingX: 5 }}>
      <Toolbar>
        <Typography variant="h4" textAlign="center" sx={{ flexGrow: 1 }}>
          Reminiscence
        </Typography>
        <Button color="error" variant="contained" size="small">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}
