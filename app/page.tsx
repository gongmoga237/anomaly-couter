"use client"

import { AnomalyButtonGroup, Statistiques, ActionButtons, UndoHistory } from "@/components";
import { AnomalyProvider } from "./AnomalyProvider";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-4 p-6 md:p-12 lg:p-24 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] ">
      <div className="z-10 max-w-5xl w-full font-mono">
        <h1 className="font-semibold text-2xl">
          Compteur d&apos;anomalies
        </h1>

        <p className="text-sm">
          Faites le décomptes de vos anomalies avec facilité, quiétude et confidence.
        </p>
      </div>

      <AnomalyProvider>
        <div className="grid relative gap-8">
          <ActionButtons />

          <UndoHistory />


          <div className="border-blue-300/25 border p-3 pb-10">
            <h2 className="text-lg font-semibold border-blue-300/25 border-b mb-10 pb-1">Code anomalies</h2>

            <AnomalyButtonGroup />
          </div>

          <div className="border-blue-300/25 border p-3 pb-10">
            <h2 className="text-lg font-semibold border-blue-300/25 border-b mb-10 pb-1">Statistiques code anomalies</h2>

            <Statistiques />
          </div>
        </div>
      </AnomalyProvider>
    </main>
  )
}
