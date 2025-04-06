import {  Timer, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

function StrokeRateCard() {
    return(<>
       <Card className="h-fit md:w-1/4">
      <CardHeader>
        <CardTitle> <div className="flex gap-5 items-center"><Timer color="blue" size='30px' />
        <h2 className=" text-2xl">Stroke Rate</h2></div></CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
       <p className="text-3xl md:text-4xl">52 spm</p>
       <p className="text-gray-500 text-sm">Strokes per minute</p>
      </CardContent>
    </Card>
    </>)
}

export default StrokeRateCard;