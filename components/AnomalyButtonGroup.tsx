"use client"

import { AnomalyContextProps, anomalyContext } from "@/app/AnomalyProvider";
import { useAnomaly } from "@/hooks/anomaly";
import { createAnomalies } from "@/lib/anomaly";
import { useContext } from "react";

export default function AnomalyButtonGroup() {
  const { click } = useAnomaly();
  const anomalies = createAnomalies()
  const { anomalies: clickedAnomalies } = useContext<AnomalyContextProps>(anomalyContext);

  return (
    <div className="flex gap-4 flex-wrap">
      {anomalies?.map((anomaly) => {
        const { code } = anomaly;

        return (
          <div key={code}>
            <button
              className={
                `border btn btn-sm ${clickedAnomalies?.at(-1)?.code === code ? 'btn-primary' : ''} ${code.includes('A') ? 'border-red-50' : ''}`
              }
              onClick={() => click(anomaly)}
            >
              {code}
            </button>
          </div>
        )
      })}
    </div>
  )
}
