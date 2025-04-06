import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { ProgressChart } from "./ProgressChart";
import { AthletesComboBox } from "./CollapsableAthletes";
import SpeedCard from "./SpeedCard";
import EffeciencyCard from "./EffeciencyCard";
import StrokeRateCard from "./StrokeRateCard";
import DisanceCard from "./DistanceCard";
import LiveVideoCard from "./LiveVideoCard";

export function CardWithForm() {
  return (
    <div className=" grid place-items-center min-h-screen">
      <Card className="min-w-full max-h-fit  ">
        <CardHeader>
          <AthletesComboBox />
          <CardTitle>Add Members</CardTitle>
        </CardHeader>
        <CardContent>
          {/* <div className="w-full">
            <AspectRatio ratio={16 / 9}>
              
            </AspectRatio>
          </div> */}
          <div className="flex flex-col md:flex-col md:gap-10  gap-5  ">
            
            <div className="flex flex-col gap-3 md:flex-row"><StrokeRateCard/> <SpeedCard /><EffeciencyCard/><DisanceCard/></div>
           <div className="flex flex-col md:flex-row gap-4 md:gap-3"> <ProgressChart /> <LiveVideoCard /></div>
          </div>
        </CardContent>
       
      </Card>
    </div>
  );
}
