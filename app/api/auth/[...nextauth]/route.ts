// import { handlers } from "@/app/auth" // Referring to the auth.ts we just created
import {NextRequest,NextResponse} from "next/server"

export async function GET (req:NextRequest,{
  params,
}: {
  params: Promise<any>
}){

let m =await params
    console.log(m)
return NextResponse.json(req.headers)

}


// export const { GET, POST } = handlers