import { NextPage, NextPageContext } from "next";
import { getSession, useSession } from "next-auth/react";
import Auth from "@/components/Auth/Auth";
import Chat from "@/components/Chat/Chat";
import { Box, Grid } from "@mui/material";

const Home: NextPage = () => {
  const { data: session } = useSession();

  console.log(session);

  const reloadSession = async () => {};

  return (
    <Box>
      <Grid
        container
        alignContent={"center"}
        justifyContent={"center"}
        direction={"column"}
        minHeight={"100vh"}
      >
        {session?.user.username ? (
          <Chat />
        ) : (
          <Auth session={session} reloadSession={reloadSession} />
        )}
      </Grid>
    </Box>
  );
};

// Server Rerender turned OFF : Only session details showing if session not null :  Undefined data not showing
export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}

export default Home;
