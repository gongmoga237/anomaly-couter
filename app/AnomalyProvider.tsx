"use client"

import { IAnomaly } from "@/types/anomaly";
import { createContext, useState } from "react";

export interface AnomalyContextProps {
  anomalies: IAnomaly[];
  setAnomalies?: (anomaly: IAnomaly[]) => void;
  undoHistory: IAnomaly[];
  setUndoHistory?: (anomaly: IAnomaly[]) => void;

}

export const anomalyContext = createContext<AnomalyContextProps>({ anomalies: [], undoHistory: [] });

export function AnomalyProvider({ children }: { children: any }) {
  const [anomalies, setAnomalies] = useState<IAnomaly[]>([]);
  const [undoHistory, setUndoHistory] = useState<IAnomaly[]>([]);

  return (
    <anomalyContext.Provider value={{ anomalies, setAnomalies, undoHistory, setUndoHistory }}>
      {children}
    </anomalyContext.Provider>
  )
}

