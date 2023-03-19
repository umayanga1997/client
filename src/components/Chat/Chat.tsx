import { Button } from "@mui/material";
import { signOut } from "next-auth/react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

interface ICahtProps {}

const Caht: React.FC<ICahtProps> = (props) => {
  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<ExitToAppIcon />}
        onClick={() => signOut()}
      >
        Sign Out
      </Button>
    </>
  );
};

export default Caht;
