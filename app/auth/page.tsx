

import { redirect } from 'next/navigation'
import checkToken from "@/app/utils/checkToken"
import Auth from "@/app/Pages/Auth"

export default function Index() {

  const check_token: boolean = checkToken();

  if (check_token) redirect("/admin");

  return (<> <Auth /> </>);

}
