export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-900 text-slate-100">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold tracking-tight text-blue-500 mb-4">
          Soliqly — Enterprise Monorepo Foundation
        </h1>
        <p className="text-lg text-slate-400 mb-8">
          Phase 0.5 Engineering Bootstrap Completed. Ready for Sprint 1 Feature Implementation.
        </p>
        <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
          <h2 className="text-xl font-semibold mb-2 text-emerald-400">System Architecture Verified:</h2>
          <ul className="list-disc pl-5 space-y-1 text-slate-300">
            <li>Next.js 15 App Router Web SPA Container</li>
            <li>FastAPI Python 3.13 Backend API Gateway</li>
            <li>PostgreSQL 16 + pgvector HNSW Vector Store</li>
            <li>Redis 7.x Cache & Queue Broker</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
