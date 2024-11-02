import { ChannelType, Member, MemberRole, Profile, Server } from "@prisma/client";

export type ServerWithMembersWithProfiles = {
  id: string;
  name: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
  members: {
    id: string;
    role: MemberRole;
    profileId: string;
    serverId: string;
    createdAt: Date;
    updatedAt: Date;
    profile: {
      id: string;
      userId: string;
      name: string | null;
      imageUrl: string;
      email: string;
      createdAt: Date;
      updatedAt: Date;
    };
  }[];
  channels: {
    id: string;
    name: string;
    type: ChannelType;
    createdAt: Date;
    updatedAt: Date;
  }[];
};