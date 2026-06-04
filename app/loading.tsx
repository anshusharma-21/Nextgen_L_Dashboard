
export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col bg-[#09090b] text-zinc-100 md:flex-row">
      <div className="hidden h-screen w-64 border-r border-zinc-900 bg-zinc-950/20 p-6 md:block" />
      
     
      <main className="flex-1 px-4 pb-24 pt-6 md:p-8 lg:p-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          
       
          <div className="col-span-1 h-64 rounded-3xl border border-zinc-900 bg-zinc-900/20 p-6 md:col-span-2 animate-pulse">
            <div className="h-8 w-2/3 rounded-lg bg-zinc-800/60" />
            <div className="mt-3 h-4 w-1/2 rounded-lg bg-zinc-800/40" />
            <div className="mt-12 h-16 w-36 rounded-2xl bg-zinc-800/40" />
          </div>

        
          <div className="col-span-1 h-64 rounded-3xl border border-zinc-900 bg-zinc-900/20 p-6 md:col-span-2 animate-pulse">
            <div className="h-6 w-1/3 rounded-lg bg-zinc-800/60" />
            <div className="mt-8 flex gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex flex-col gap-2">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <div key={j} className="h-6 w-6 rounded-md bg-zinc-800/50" />
                  ))}
                </div>
              ))}
            </div>
          </div>

       
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-48 rounded-3xl border border-zinc-900 bg-zinc-900/20 p-6 animate-pulse">
              <div className="flex justify-between">
                <div className="h-12 w-12 rounded-2xl bg-zinc-800/60" />
                <div className="h-6 w-20 rounded-full bg-zinc-800/40" />
              </div>
              <div className="mt-8 h-5 w-3/4 rounded-lg bg-zinc-800/60" />
              <div className="mt-4 h-2 w-full rounded-full bg-zinc-800/40" />
            </div>
          ))}
          
        </div>
      </main>
    </div>
  );
}