import { AnomalyContextProps, anomalyContext } from "@/app/AnomalyProvider";
import { IAnomaly } from "@/types/anomaly";
import { useContext, useState } from "react";

export function useAnomaly() {
  const { anomalies, setAnomalies, undoHistory, setUndoHistory } = useContext<AnomalyContextProps>(anomalyContext);

  const getNumberOfClick = (code: string) => {
    return anomalies?.filter((anomaly) => anomaly.code === code).length;
  }

  const click = (anomaly: IAnomaly) => {
    setUndoHistory?.([]);
    anomalies && setAnomalies?.([...anomalies, anomaly]);
  }

  const undoClick = () => {
    const removedAnomaly = anomalies.pop();
    removedAnomaly && setUndoHistory?.([...undoHistory, removedAnomaly]);
    anomalies && setAnomalies?.([...anomalies]);
  }

  const redoClick = () => {
    const removedAnomaly = undoHistory?.pop();
    removedAnomaly &&
      anomalies &&
      setAnomalies?.([...anomalies, removedAnomaly]);
  }

  const resetClicks = () => {
    setAnomalies?.([]);
    setUndoHistory?.([]);
  }

  return {
    getNumberOfClick,
    click,
    undoClick,
    resetClicks,
    redoClick,
    undoHistory
  }
}

