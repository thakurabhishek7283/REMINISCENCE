import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import PostDetails from "./components/PostDetails/PostDetails";
import Auth from "./components/Auth/Auth";
import SearchByCreator from "./components/SearchByCreator";
import SearchByTags from "./components/SearchByTags";

function App() {
  const theme = createTheme();
  const user = JSON.parse(localStorage.getItem("profile"));
  const navigate = useNavigate();
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
              <Route exact path="/posts/search" element={<Home />} />
              <Route
                exact
                path="/auth"
                element={!user ? <Auth /> : navigate("/posts")}
              />
              <Route path="/creators/:name" element={<SearchByCreator />} />
              <Route path="/tags/:name" element={<SearchByTags />} />
            </Routes>
          </Container>
        </React.Fragment>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
