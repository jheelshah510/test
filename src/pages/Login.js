import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import "../components/Login.component.css";
import { useLogin } from "../hooks/useLogin";
import {
  Paper,
  TextField,
  Button,
  Typography,
  Link,
  Radio,
  FormControlLabel,
  RadioGroup,
  Alert,
} from "@mui/material";
import { useHistory } from "react-router-dom";

function Login() {
  const { login, error, isPending } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 280,
    margin: "20px auto",
  };
  const btnstyle = { margin: "8px 0" };
  const handleStudentClick = () => {
    let path = "/";
    history.push(path);

    document.getElementById("hello");
  };
  const handleTeacherClick = () => {
    let path = "/loginTeacher";
    history.push(path);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <form id="hello" onSubmit={handleSubmit}>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <h2>Student Login</h2>
          </Grid>
          <TextField
            label="E-mail"
            fullWidth
            required
            sx={{ mb: 1 }}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="outlined-basic"
            variant={"outlined"}
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {!isPending && (
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnstyle}
              fullWidth
            >
              Login
            </Button>
          )}
          {isPending && (
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnstyle}
              fullWidth
              disabled
            >
              Loading
            </Button>
          )}
          <Typography>
            {" "}
            Do you have an account ?<Link href="/signup">Sign Up</Link>
          </Typography>
          <RadioGroup defaultValue="student">
            <FormControlLabel
              value="student"
              control={
                <Radio color="primary" onChange={() => handleStudentClick()} />
              }
              label="Student"
            />
            <FormControlLabel
              value="teacher"
              control={
                <Radio color="primary" onChange={() => handleTeacherClick()} />
              }
              label="Teacher"
            />
          </RadioGroup>
        </Paper>
      </Grid>

      {error && (
        <Alert severity="error">
          <p>{error}</p>
        </Alert>
      )}
    </form>
  );
}

export default Login;
