


import checkToken from "@/app/utils/checkToken"
import Auth from "@/app/Components/Auth"
import { redirect } from "next/navigation";


export default function Admin() {

  // const check_token: boolean = checkToken();
  // if (!check_token) redirect("/auth");


  return (
    <>
      <div>
        hello admin
      </div></>

  );
}
