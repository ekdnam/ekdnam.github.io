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
        I'm a solo AI engineer at <a href="https://getnerdio.com/press/nerdio-secures-series-c-investment-from-general-atlantic/" className="underline">unicorn</a> <a href="https://getnerdio.com" target="_blank" rel="noopener noreferrer" className="underline"><em>Nerdio</em></a>. 
        I shippesd <em>AssistPro</em> (<a href="https://www.forbes.com/sites/adrianbridgwater/2024/04/02/the-rise-of-infused-lower-level-ai/" rel="noopener noreferrer" className="underline">Forbes-mentioned</a>) 
        and <em>AnalyticsPro</em> (KQL assistant), additionally managing <a href="https://nmehelp.getnerdio.com/hc/en-us/articles/30352365570957-Manage-Nerdio-Manager-Copilot" className="underline">Nerdio Copilot</a>, helping land Nerdio on <a href="https://www.crn.com/news/cloud/2024/the-20-hottest-ai-cloud-companies-the-2024-crn-ai-100?page=14" className="underline">CRN's 2024 Top 100 AI list</a>.
      </p>
      <p className="mb-4">
        My earlier research on low-resource NLP earned the first spot at ACL/COLING workshops; details live on my <a href="https://scholar.google.com/citations?user=TSl2LFMAAAAJ&hl=en" className="underline">Google Scholar</a>.
      </p>
      <p className="mb-4">
        Off the clock I train Brazilian Jiu-Jitsu, perform <a href="https://youtu.be/UYhIbkGQho4" className="underline">improv</a> in Austin, write and act in <a href="https://youtu.be/PRygHW_7IM8" className="underline">German plays</a>, and travel whenever I can.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}