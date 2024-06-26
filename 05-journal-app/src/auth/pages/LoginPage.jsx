import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { checkingAuthentication, startGoogleSingIng } from "../../store/auth";
import { useMemo } from "react";

export const LoginPage = () => {
  const { email, password, onInputChange } = useForm({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);
  const isAuthenticated = useMemo(() => status === "checking", [status]);

  const onSubmit = (event) => {
    event.preventDefault();

    console.log({ email, password });
    dispatch(checkingAuthentication(email, password));
  };

  const onGoogleSignIn = () => {
    console.log("Google");
    dispatch(startGoogleSingIng());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="example@example.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticated}
                type="submit"
                variant="contained"
                fullWidth
              >
                <Typography>Login</Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticated}
                onClick={onGoogleSignIn}
                variant="contained"
                fullWidth
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
