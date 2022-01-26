import { Container } from "@mui/material";
import React from "react";
import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostDetails from "./components/PostDetails/PostDetails";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <NavBar />
        <Container maxWidth="xl" sx={{ mt: 6 }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/posts" element={<Home />} />
            <Route exact path="/posts/:id" element={<PostDetails />} />
          </Routes>
        </Container>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
