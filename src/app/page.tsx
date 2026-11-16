import { getLandingData } from "./_data-access/get-landing-data";
import { ContentComponent } from "./_components/content";

export const dynamic = "force-static";

export default async function Page() {
  const data = await getLandingData();

  return <ContentComponent data={data} />;
}
