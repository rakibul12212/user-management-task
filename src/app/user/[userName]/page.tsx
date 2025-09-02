

import UserDetails from "@/app/components/pages/UserDetails/UserDetails";
import { User } from "@/app/components/type/Type";
import { getUsers } from "@/app/lib/api";

type PageProps = {
  params: Promise<{ userName: string }>; 
};

export default async function Page({ params }: PageProps) {
  const { userName } = await params;

  const users: User[] = await getUsers();
  const user = users.find((u) => u.username === userName);

  return <UserDetails user={user} />;
}


