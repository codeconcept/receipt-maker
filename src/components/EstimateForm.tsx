import { SubmitHandler, useForm, useFieldArray } from "react-hook-form";
import { Navigate, useNavigate } from 'react-router-dom';
import { Estimate } from '../App';
import styles from './EstimateForm.module.css'

type estimateFormProps = {
    onEstimateCreate: (data: Estimate) => void
}

export default function EstimateForm({ onEstimateCreate }: estimateFormProps) {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, control } = useForm<Estimate>();
    // to allow users to dynamically add tasks
    const { fields, append, remove } = useFieldArray({
        name: 'tasks',
        control
    })

    function onSubmit(data: Estimate) {
        onEstimateCreate(data);
        navigate('/my-estimates');
    }

    return <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="estimateNumber" className={styles.formlabel}>Estimate Number</label>
        <input className={styles.forminput} {...register("estimateNumber", { required: true })} placeholder='Estimate Number' id="estimateNumber" />
        <span className={styles.formerror}>{errors.estimateNumber && "Please, enter an estimate number"}</span>

        <label htmlFor="estimateDate" className={styles.formlabel}>Estimate Date</label>
        <input className={styles.forminput} type='date'  {...register("estimateDate", { required: true })} placeholder='Estimate Date' id='estimateDate' />
        <span className={styles.formerror}>{errors.estimateDate && "Please, enter an estimate date"}</span>

        <label htmlFor="paymentDate" className={styles.formlabel}>Payment Date</label>
        <input className={styles.forminput} type='date' {...register('paymentDate', { required: true })} placeholder='Due date' id='paymentDate' />
        <span className={styles.formerror}>{errors.paymentDate && "Please, enter a due date"}</span>

        <h4>Estimate items (goods or service)</h4>
        {fields.map((field, index) => {
            return (
                <div key={field.id}>
                    <section key={field.id} className={styles.task}>
                        <div>
                            <label htmlFor="taskReference" className={styles.formlabel}>Item Reference</label>
                            <input type="text" id='taskReference' {...register(`tasks.${index}.reference` as const, { required: true })} className={styles.forminput} />
                            <div className={styles.formerror}>{errors?.tasks?.[index]?.reference && "Please, enter a reference"}</div>
                        </div>

                        <div>
                            <label htmlFor="taskDescription" className={styles.formlabel}>Item Description</label>
                            <input type="text" id='taskDescription' {...register(`tasks.${index}.description` as const, { required: true })} className={styles.forminput} />
                            <div className={styles.formerror}>{errors?.tasks?.[index]?.description && "Please, enter a description"}</div>
                        </div>

                        <div>
                            <label htmlFor="taskQuantity" className={styles.formlabel}>Item Quantity</label>
                            <input type="number" id='taskQuantity' {...register(`tasks.${index}.quantity` as const, { valueAsNumber: true, required: true })} className={styles.forminput} />
                            <div className={styles.formerror}>{errors?.tasks?.[index]?.quantity && "Please, enter a quantity"}</div>
                        </div>

                        <div>
                            <label htmlFor="taskUnitPrice" className={styles.formlabel}>Item Unit Price</label>
                            <input type="text" id='taskUnitPrice' {...register(`tasks.${index}.unitPrice` as const, { valueAsNumber: true, required: true })} className={styles.forminput} />
                            <div className={styles.formerror}>{errors?.tasks?.[index]?.unitPrice && "Please, enter a unit price"}</div>
                        </div>

                        <div>
                            <label htmlFor="taskVAT" className={styles.formlabel}>Item VAT (in %)</label>
                            <input type="text" id='taskVAT' {...register(`tasks.${index}.vat` as const, { valueAsNumber: true, required: true })} className={styles.forminput} />
                            <div className={styles.formerror}>{errors?.tasks?.[index]?.vat && "Please, enter a VAT (WITHOUT %)"}</div>
                        </div>

                        <div>
                            <label htmlFor="taskDeposit" className={styles.formlabel}>Deposit</label>
                            <input type="text" id='taskDeposit' {...register(`tasks.${index}.deposit` as const, { valueAsNumber: true, required: true })} className={styles.forminput} />
                            <div className={styles.formerror}>{errors?.tasks?.[index]?.vat && "Please, enter the deposit amount"}</div>
                        </div>
                        <button type='button' onClick={() => { remove(index) }} className={`${styles.formbutton} ${styles.delete}`}>DELETE</button>
                    </section>
                </div>
            )
        })}
        <button type='button' onClick={() => {
            append({
                reference: '12345',
                description: 'describe the item',
                quantity: 1,
                unitPrice: 100,
                vat: 20,
                deposit: 0
            })
        }} className={styles.formbutton}>add item</button>

        <input className={styles.formbutton} type="submit" value="create estimate" />
    </form >
}    
