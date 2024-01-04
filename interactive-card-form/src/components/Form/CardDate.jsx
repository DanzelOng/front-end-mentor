import { PatternFormat } from 'react-number-format';
import ErrorMsg from '../error/ErrorMsg';

export default function CardDate({ month, year, status, dispatch }) {
    return (
        <div className='card-date'>
            <label htmlFor='date'>Exp. Date (mm/yy)</label>
            <div className='card-details-input'>
                <div>
                    <PatternFormat
                        className={
                            status.field3 === 'valid' || !status.field1
                                ? ''
                                : 'invalid'
                        }
                        id='date'
                        type='text'
                        placeholder='MM'
                        format='##'
                        value={month === null || !month ? '' : month}
                        onChange={(e) =>
                            dispatch({ type: 'month', payload: e.target.value })
                        }
                    />
                </div>
                <div>
                    <PatternFormat
                        className={
                            status.field4 === 'valid' || !status.field1
                                ? ''
                                : 'invalid'
                        }
                        type='text'
                        placeholder='YY'
                        format='##'
                        value={year === null || !year ? '' : year}
                        onChange={(e) =>
                            dispatch({ type: 'year', payload: e.target.value })
                        }
                    />
                </div>
            </div>
            {(status.field3 === 'blank' || status.field4 === 'blank') && (
                <ErrorMsg content="Can't be blank" />
            )}
            {(status.field3 === 'invalid' || status.field4 === 'invalid') && (
                <ErrorMsg content='Must have 2 digits' />
            )}
        </div>
    );
}
