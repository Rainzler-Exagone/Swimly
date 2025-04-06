import {  TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

function SpeedCard() {
    return(<>
       <Card className="h-fit md:w-1/4">
      <CardHeader>
        <CardTitle> <div className="flex gap-5 items-center"><TrendingUp color="blue" size='30px'/> 
        <h2 className=" text-2xl">Speed</h2></div></CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
       <p className="text-3xl md:text-4xl">1.8 m/s</p>
       <p className="text-gray-500 text-sm">Average swimming speed</p>
      </CardContent>
    </Card>
    </>)
}

export default SpeedCard;