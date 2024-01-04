import ErrorMsg from '../error/ErrorMsg';

export default function CardUsername({ username, status, dispatch }) {
    return (
        <section className={`username`}>
            <label htmlFor='name'>Cardholder Name</label>
            <input
                className={
                    status.field1 === 'valid' || !status.field1 ? '' : 'invalid'
                }
                id='name'
                type='text'
                maxLength={20}
                placeholder='e.g. Jane Appleseed'
                value={username === null || !username ? '' : username}
                onChange={(e) =>
                    dispatch({ type: 'username', payload: e.target.value })
                }
            />
            {status.field1 === 'blank' && <ErrorMsg content="Can't be blank" />}
            {status.field1 === 'invalid-format' && (
                <ErrorMsg content="Can't have digits" />
            )}
            {status.field1 === 'invalid' && (
                <ErrorMsg content='Minimum of 3 characters' />
            )}
        </section>
    );
}
