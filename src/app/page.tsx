import LiFiWidgetNext from "@/components/lifi-widget-next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div>
      <w3m-button />
      <Tabs defaultValue="nothing" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="nothing">Nothing</TabsTrigger>
          <TabsTrigger value="lifi">Li.Fi</TabsTrigger>
        </TabsList>
        <TabsContent value="nothing">nothing here :)</TabsContent>
        <TabsContent value="lifi">
          <LiFiWidgetNext />
        </TabsContent>
      </Tabs>
    </div>
  );
}
