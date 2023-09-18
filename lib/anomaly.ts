import { IAnomaly } from "@/types/anomaly";

export function createAnomalies(): IAnomaly[] {
  const anomalies: IAnomaly[] = [];

  for (let i = 1; i <= 8; i++) {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

    for (const letter of letters) {
      const stop =
        i === 1 && letter === 'J' ||
        i === 2 && letter === 'F' ||
        i === 3 && letter === 'I' ||
        i === 4 && letter === 'G' ||
        i === 5 && letter === 'J' ||
        i === 6 && letter === 'J' ||
        i === 8 && letter === 'G';

      anomalies.push(createAnomaly({ code: `${i}${i}${letter}` }))

      if (stop) break;
    }
  }

  return anomalies;
}

interface CreateAnomalyParams {
  code: string;
  color?: string;
}

export function createAnomaly({ code, color }: CreateAnomalyParams): IAnomaly {
  return {
    code,
    color
  }
}

export function getAnomaliesSet(anomalies: IAnomaly[]): IAnomaly[] {
  const anomaliesSet: IAnomaly[] = [];

  for (const anomaly of anomalies) {
    if (anomaliesSet.find((anomalyInSet) => anomalyInSet.code === anomaly.code)) continue;
    anomaliesSet.push(anomaly);
  }

  return anomaliesSet;
}
