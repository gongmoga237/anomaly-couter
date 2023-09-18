"use client"

import { AnomalyContextProps, anomalyContext } from "@/app/AnomalyProvider";
import { useAnomaly } from "@/hooks/anomaly";
import { useContext } from "react";

export default function ActionButtons() {
  const { resetClicks, undoClick, undoHistory, redoClick } = useAnomaly();
  const { anomalies } = useContext<AnomalyContextProps>(anomalyContext);


  return (
    <div className="flex gap-8">
      <button className="btn btn-accent"
        disabled={!anomalies.length}
        onClick={() => undoClick()}
      >
        Annuler Clicque
      </button>

      <button
        className="btn btn-info"
        disabled={!undoHistory.length}
        onClick={() => redoClick()}
      >
        Refaire le dernier clicque
      </button>

      <button
        className="btn btn-error"
        onClick={() => resetClicks()}
        disabled={!anomalies.length}
      >
        Effacer
      </button>
    </div>
  )
}
