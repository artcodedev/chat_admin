


import checkToken from "@/app/utils/checkToken"
import { redirect } from "next/navigation";
import Admin from "@/app/Pages/Admin"


export default function Index() {

  const check_token: boolean = checkToken();

  if (!check_token) redirect("/auth");


  return ( <> <Admin /> </> );
}
