
import NavBar from '../components/NavBar'; 
import SitesTable from '../components/SitesTable';

export default function Home() {
  return (
    <main className="min-h-screen flex-col justify-between">
      <NavBar />
      <div className='app p-8 mx-auto max-w-6xl'>
        <section className='mt-16' style={{ minHeight: '400px' }}>
          <div className='section-title flex flex-col items-center'>
            <h1 className="title_text mb-3 font-bold">Flowws.io</h1>
            <h4 className='text-gray-600'>Unlock the Full Potential of Your Online Business with Advanced UX Analysis</h4>
            <form className="w-full max-w-xs relative mt-8">
                <input
                  className="w-full leading-tight text-gray-700 border appearance-none focus:outline-none focus:shadow-outline px-4"
                  placeholder='Rank your Site'
                  type="text"
                  style={{ borderRadius: '50px', height: '50px' }}
                />
                <button 
                  className="absolute text-white bg-black-500 px-6"
                  style={{ backgroundColor: '#212121', right: '0', borderRadius: '50px', height: '50px' }}
                  type="submit"
                >
                    Submit
                </button>
            </form>
          </div>
          <div className='section-body mt-16 mb-16'>
            <SitesTable />
          </div>
          <div className='section-footer'>

          </div>
        </section>
        <section className="grid text-center gap-4 lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left mt-8">
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border px-5 py-4 transition-colors border-gray-300 hover:dark:border-neutral-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-lg font-semibold`}>
              Automate It{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-60 text-balance`}>
             Say goodbye to endless research. Automate reports and run automated testing in minutes.
            </p>
          </a>
          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border px-5 py-4 transition-colors border-gray-300 hover:dark:border-neutral-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-lg font-semibold`}>
              Optmize It{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-60`}>
              Benchmark your website’s against industry standards and competitors to identify key areas for improvement.
            </p>
          </a>
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border px-5 py-4 transition-colors border-gray-300  hover:dark:border-neutral-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-lg font-semibold`}>
            Get Inspired{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-60`}>
             Watch thousands of images and videos to figure out what is the best way to build your components.
            </p>
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border px-5 py-4 transition-colors border-gray-300 hover:dark:border-neutral-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-lg font-semibold`}>
             Stay Ahead{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-60`}>
            Be a leader in your industry by powering all the metrics needed to ensure a seamless experience.
          </p>
          </a>
        </section>
        <section className='flex items-center py-8 px-4 mt-16' style={{ backgroundColor: '#212121', color: '#fff', minHeight: '400px', borderRadius: '25px' }}>
          <div className='section-title p-16'>
            <h2 style={{ fontSize: '32px', fontWeight: '600' }}>Leverage Automated Testing</h2>
            <p className='text-gray-400'>Expain here why using flowws.io you can cut on the cost of research and get access to a more realistic grounded insight into user experience.</p>
          </div>
          <div className='image-feature'>
            <img></img>
          </div>
        </section>
    </div>


    </main>
  );
}
