import { SubmitHandler, useForm } from "react-hook-form";
import { Estimate } from '../App';
import styles from './EstimateForm.module.css'

export default function EstimateForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<Estimate>();
    const onSubmit: SubmitHandler<Estimate> = data => console.log(data);


    return <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <label htmlFor="estimateNumber" className={styles.formlabel}>Estimate Number</label>
        <input className={styles.forminput} {...register("estimateNumber", { required: true })} placeholder='Estimate Number' id="estimateNumber" />
        <span className={styles.formerror}>{errors.estimateNumber && "Please, enter an estimate number"}</span>

        <label htmlFor="estimateDate" className={styles.formlabel}>Estimate Date</label>
        <input className={styles.forminput} type='date'  {...register("estimateDate", { required: true })} placeholder='Estimate Date' id='estimateDate' />
        <span className={styles.formerror}>{errors.estimateDate && "Please, enter an estimate date"}</span>


        <label htmlFor="paymentDate" className={styles.formlabel}>Payment Date</label>
        <input className={styles.forminput} type='date' {...register('paymentDate', { required: true })} placeholder='Due date' id='paymentDate' />
        <span className={styles.formerror}>{errors.paymentDate && "Please, enter a due date"}</span>

        <input className={styles.formbutton} type="submit" value="create estimate" />
    </form>
}