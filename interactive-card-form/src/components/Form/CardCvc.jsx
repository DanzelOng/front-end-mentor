import { PatternFormat } from 'react-number-format';
import ErrorMsg from '../error/ErrorMsg';

export default function CardCvc({ cvc, status, dispatch }) {
    return (
        <div className='card-cvc'>
            <label htmlFor='cvc'>Cvc</label>
            <PatternFormat
                className={
                    status.field5 === 'valid' || !status.field1 ? '' : 'invalid'
                }
                id='cvc'
                type='text'
                placeholder='e.g. 123'
                format='###'
                value={cvc === null || !cvc ? '' : cvc}
                onChange={(e) =>
                    dispatch({ type: 'cvc', payload: e.target.value })
                }
            />
            {status.field5 === 'blank' && <ErrorMsg content="Can't be blank" />}
            {status.field5 === 'invalid' && (
                <ErrorMsg content='Must have 3 digits' />
            )}
        </div>
    );
}
