import { BlogPosts } from "app/components/posts";
import Image from "next/image";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        ekdnam
      </h1>
      <div className="mb-8 flex">
        <div className="w-full">
          <Image
            src="/images/about/20241130_131045.jpg"
            alt="Profile picture"
            className="rounded-lg w-full"
            sizes="100vw"
            priority
            width={1200}
            height={1200}
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <p className="mb-4">
        I am a software engineer at Microsoft, working on planet-scale distributed systems in the Azure Storage team. 
        I help to provide limitless data storage to Microsoft's most demanding customers. 
        I also work on AI agents, trying to drive developer productivity.
      </p>
      <p className="mb-4">
        Previously, I was a solo AI engineer at the <a href="https://getnerdio.com/press/nerdio-secures-series-c-investment-from-general-atlantic/" className="underline">unicorn</a> startup, <a href="https://getnerdio.com" target="_blank" rel="noopener noreferrer" className="underline">Nerdio</a>. 
        I worked on AssistPro (<a href="https://www.forbes.com/sites/adrianbridgwater/2024/04/02/the-rise-of-infused-lower-level-ai/" rel="noopener noreferrer" className="underline">mentioned in Forbes</a>), AnalyticsPro (Kusto Query Language code generator tool), <a href="https://nmehelp.getnerdio.com/hc/en-us/articles/30352365570957-Manage-Nerdio-Manager-Copilot" className="underline">Nerdio Copilot</a>, which has led to Nerdio landing on CRN's Top AI 100 list for <a href="https://www.crn.com/news/cloud/2024/the-20-hottest-ai-cloud-companies-the-2024-crn-ai-100?page=14" className="underline">2024</a> and <a href="https://www.crn.com/news/cloud/2025/the-20-hottest-ai-cloud-companies-the-2025-crn-ai-100?page=15" className="underline">2025</a>.
      </p>
      <p className="mb-4">
        My earlier research on low-resource NLP earned the first spot at ACL/COLING workshops; details live on my <a href="https://scholar.google.com/citations?user=TSl2LFMAAAAJ&hl=en" className="underline">Google Scholar</a>.
      </p>
      <p className="mb-4">
        Off the clock I train in Brazilian Jiu-Jitsu, perform <a href="https://youtu.be/UYhIbkGQho4" className="underline">improv</a>, write and act in <a href="https://youtu.be/PRygHW_7IM8" className="underline">German plays</a>, and travel whenever I can.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}