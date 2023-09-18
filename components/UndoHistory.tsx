import { AnomalyContextProps, anomalyContext } from '@/app/AnomalyProvider';
import { useContext } from 'react'

export default function UndoHistory() {
  const { undoHistory } = useContext<AnomalyContextProps>(anomalyContext);

  return (
    <div className='flex flex-wrap gap-6'>
      <h2 className='w-full font-bold'>Les clicques annuler :</h2>
      {!undoHistory.length ? <p>Aucune action annuler pour l&apos;instant.</p> : null}
      {undoHistory.map(({ code }) => (<span key={code} className={`text-accent font-bold`}>{code}</span>))}
    </div>
  )
}
