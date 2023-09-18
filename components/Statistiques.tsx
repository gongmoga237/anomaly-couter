"use client";

import { AnomalyContextProps, anomalyContext } from "@/app/AnomalyProvider";
import { useAnomaly } from "@/hooks/anomaly";
import { getAnomaliesSet } from "@/lib/anomaly";
import { useContext } from "react";

export default function Statistiques() {
  const { anomalies } = useContext<AnomalyContextProps>(anomalyContext);
  const { getNumberOfClick } = useAnomaly();

  if (!anomalies?.length) return (
    <p className="text-center p-8">Aucune anomalie n&apos;a été clicquer.</p>
  )

  const anomaliesSet = getAnomaliesSet(anomalies);

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-6">
      {anomaliesSet.map((anomaly) => {
        return (
          <li key={anomaly.code}>Total <em className="font-bold text-primary"> {anomaly.code} </em>= <em className="font-bold">{getNumberOfClick(anomaly.code)}</em></li>
        )
      })}
    </ul>
  )
}
