
import { redirect } from 'next/navigation'
import checkToken from "@/app/utils/checkToken"

export default function Index() {
  
  const check_token: boolean = checkToken();

  redirect( check_token ? "/admin" : "/auth"); 
  
}
