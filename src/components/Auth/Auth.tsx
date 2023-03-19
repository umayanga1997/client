import { Google } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { useState } from "react";

interface IAuthProps {
  session: Session | null;
  reloadSession: () => void;
}

const Auth: React.FunctionComponent<IAuthProps> = ({
  session,
  reloadSession,
}) => {
  const [userName, setUserName] = useState("");

  async function onSubmit() {
    console.log("Functionaning");
  }

  return (
    <>
      {session ? (
        <>
          <TextField
            variant="outlined"
            label="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></TextField>

          <Button sx={{ mt: 5 }} variant="contained" onClick={() => onSubmit()}>
            Submit
          </Button>
        </>
      ) : (
        <Button
          variant="outlined"
          style={{ color: "#ab003c" }}
          startIcon={<Google style={{ color: "#ab003c" }} />}
          onClick={() => signIn("google")}
        >
          Continue with Google
        </Button>
      )}
    </>
  );
};

export default Auth;
