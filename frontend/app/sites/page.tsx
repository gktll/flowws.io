import NavBar from "@/components/NavBar";
import SitesTable from '../../components/SitesTable';

export default function Page() {
  return  (
    <main className="min-h-screen flex-col justify-between">
      <NavBar />

      <div className="app p-8 mx-auto max-w-6xl">
  
        <section className='mt-16' style={{ minHeight: '400px' }}>
            <div className='section-title flex flex-col'>
              <h1 className="title_text mb-3 font-bold">Benchmark Data</h1>
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
            <img></img>
            <div className='section-body mt-16'>
              <SitesTable />
            </div>
            <div className='section-footer'>

            </div>
          </section>





      </div>
    </main>
  );
}