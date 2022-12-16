import { useContext } from 'react'
import { EstimateCtx } from '../App'
import { EstimateService } from '../services/estimateService'
import EstimateSummary from './EstimateSummary'
import styles from './MyEstimates.module.css';

export default function MyEstimates() {
    const estimateSrv = useContext<EstimateService>(EstimateCtx)
    const estimates = estimateSrv.readEstimates()

    return <>
        <h3>All my estimates</h3>
        <div className={styles.estimatelist}>
            {estimates.map(est => (<EstimateSummary data={est} key={est.id} />))}
        </div>
    </>
}