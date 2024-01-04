import { PatternFormat } from 'react-number-format';
import ErrorMsg from '../error/ErrorMsg';

export default function CardNumber({ pin, status, dispatch }) {
    return (
        <section className='card-number'>
            <label htmlFor='number'>Card Number</label>
            <PatternFormat
                className={
                    status.field2 === 'valid' || !status.field1 ? '' : 'invalid'
                }
                id='number'
                placeholder='e.g 1234 5678 9123 0000'
                format='#### #### #### ####'
                value={pin === null || !pin ? '' : pin}
                onChange={(e) =>
                    dispatch({ type: 'pin', payload: e.target.value })
                }
            />
            {status.field2 === 'blank' && <ErrorMsg content="Can't be blank" />}
            {status.field2 === 'invalid' && (
                <ErrorMsg content='Must have 16 digits' />
            )}
        </section>
    );
}
