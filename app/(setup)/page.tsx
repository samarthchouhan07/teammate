import {InitialModal} from "@/components/Modals/intialModal";
import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { Profile } from "@prisma/client";
import { redirect } from "next/navigation";

const SetupPage = async () => {
  const profile = (await initialProfile()) as Profile;

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  return <InitialModal />;
};

export default SetupPage;
