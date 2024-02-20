import { Add, Remove, Send } from "@mui/icons-material";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Toolbar,
} from "@mui/material";
import React from "react";

const UserAdd = () => {
  return (
    <>
      <Box component="div">
        <form>
          <Toolbar>
            <TextField
              variant="outlined"
              label="User Name"
              color="secondary"
              fullWidth
              type="text"
              required
              sx={{ m: 1 }}
            />
            <TextField
              variant="outlined"
              label="Email"
              color="secondary"
              fullWidth
              type="email"
              required
              sx={{ m: 1 }}
            />
            <TextField
              variant="outlined"
              label="Password"
              color="secondary"
              fullWidth
              type="password"
              required
              sx={{ m: 1 }}
            />
            <Button color="success" variant="contained" sx={{ m: 1, p: 2 }}>
              <Add />
            </Button>
            <Button color="error" variant="contained" sx={{ m: 1, p: 2 }}>
              <Remove />
            </Button>
          </Toolbar>
          <Button
            sx={{ mt: 5 }}
            color="primary"
            variant="contained"
            endIcon={<Send />}
          >
            Submit
          </Button>
        </form>
      </Box>
      <Box sx={{ mt: 5 }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "secondary.dark" }}>
                <TableCell sx={{ color: "white" }}>UserName</TableCell>
                <TableCell sx={{ color: "white" }}>Email</TableCell>
                <TableCell sx={{ color: "white" }}>Password</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow hover>
                <TableCell>H</TableCell>
                <TableCell>H@gmail.com</TableCell>
                <TableCell>7823jfsd78</TableCell>
              </TableRow>
              <TableRow hover>
                <TableCell>A</TableCell>
                <TableCell>A@gmail.com</TableCell>
                <TableCell>oskdfj939</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default UserAdd;
