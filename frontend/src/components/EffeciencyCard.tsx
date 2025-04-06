import {  Activity, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

function EffeciencyCard() {
    return(<>
       <Card className="h-fit md:w-1/4">
      <CardHeader>
        <CardTitle> <div className="flex gap-5 items-center"><Activity color="blue" size='30px'/> 
        <h2 className=" text-2xl">Efficiency</h2></div></CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
       <p className="text-3xl md:text-4xl">85 %</p>
       <p className="text-gray-500 text-sm">Average swimming efficiency score</p>
      </CardContent>
    </Card>
    </>)
}

export default EffeciencyCard;