import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostDetails from "./components/PostDetails/PostDetails";
import Auth from "./components/Auth/Auth";

function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <React.Fragment>
          <NavBar />
          <Container maxWidth="xl" sx={{ mt: 6 }}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/posts" element={<Home />} />
              <Route exact path="/posts/:id" element={<PostDetails />} />
              <Route exact path="/auth" element={<Auth />} />
            </Routes>
          </Container>
        </React.Fragment>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
