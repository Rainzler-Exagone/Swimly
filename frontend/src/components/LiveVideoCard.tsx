import { AspectRatio } from "./ui/aspect-ratio";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import ratio from "../assets/vvv.mp4";

function LiveVideoCard() {
    return(<>
       <Card className="h-fit md:w-[800px] md:h-auto">
      <CardHeader>
        <CardTitle>Live video</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
       <AspectRatio className="h-fit "><video src={ratio} loop autoPlay title="live-vide" className="rounded-2xl h-1/2"/></AspectRatio>
      </CardContent>
    </Card>
    </>)
}

export default LiveVideoCard;