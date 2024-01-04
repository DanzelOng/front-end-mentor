import Button from '../button/Button';

export default function CardSuccess({ onReset }) {
    return (
        <section className='card-success-container'>
            <div className='card-tick' role='img'></div>
            <h1 className='card-success-heading'>Thank You!</h1>
            <p className='card-success-text'>We've added your card details</p>
            <Button content='Continue' onBtnClick={onReset} />
        </section>
    );
}
