import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import PostDetails from "./components/PostDetails/PostDetails";
import Auth from "./components/Auth/Auth";
import Search from "./components/Search/Search";
import { StyledEngineProvider } from "@mui/material/styles";

function App() {
  const theme = createTheme();
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <NavBar />
            <Container maxWidth="xl">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/posts" element={<Home />} />
                <Route exact path="/posts/search" element={<Home />} />
                <Route exact path="/posts/:id" element={<PostDetails />} />
                <Route exact path="/creators/:name" element={<Search />} />
                <Route exact path="/tags/:name" element={<Search />} />
                <Route
                  exact
                  path="/auth"
                  element={!user ? <Auth /> : <Navigate replace to="/posts" />}
                />
              </Routes>
            </Container>
          </React.Fragment>
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  );
}

export default App;
