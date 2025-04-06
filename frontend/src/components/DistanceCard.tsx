import {   User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

function DisanceCard() {
    return(<>
       <Card className="h-fit md:w-1/4">
      <CardHeader>
        <CardTitle> <div className="flex gap-5 items-center"><User color="blue" size='30px'/> 
        <h2 className=" text-2xl">Distance</h2></div></CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
       <p className="text-3xl md:text-4xl">50 m</p>
       <p className="text-gray-500 text-sm">Last session distance</p>
      </CardContent>
    </Card>
    </>)
}

export default DisanceCard;