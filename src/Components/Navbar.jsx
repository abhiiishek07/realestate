import React from "react";
import styled from "styled-components";
import { AppBar, Toolbar, Stack, Button } from "@mui/material";
import { Box } from "@mui/system";
function Navbar() {
  return (
    <AppBar position="sticky" style={{ background: "#f8f7fd" }}>
      <Toolbar>
        <Box display="flex" flexGrow={1}>
          <Image>
            <img
              src="https://softr-prod.imgix.net/applications/c894b09d-a577-43c3-ba03-472ba216b6b2/assets/9f0fb6a5-8ca4-4fa2-9678-50b4195afa26.png"
              alt="reunion"
              height={45}
            ></img>
          </Image>
        </Box>
        <Stack direction="row" spacing={2}>
          <Button variant="text">Home</Button>
          <Button variant="text">Favorites</Button>
          <Button
            variant="text"
            style={{ backgroundColor: "#7065ef", color: "#ffffff" }}
          >
            Logout
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
const Image = styled.div`
  padding-left: 5rem;
`;
export default Navbar;
