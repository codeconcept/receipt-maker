import { useContext } from 'react'
import { EstimateCtx } from '../App'
import Card from '../components/Card'
import { EstimateService } from '../services/estimateService'
import PDFprinter from '../services/PDFprinter'

export default function MyEstimates() {
    const estimateSrv = useContext<EstimateService>(EstimateCtx)
    const estimates = estimateSrv.readEstimates()

    return <>
        <h3>All my estimates</h3>
        {/* <div>
            { JSON.stringify(estimates, null, 2)}
        </div> */}
        <PDFprinter>
            {estimates.map(est => (<Card data={est} key={est.id} />))}
        </PDFprinter>
    </>
}