export default function CardBackContainer({ cvc }) {
    return (
        <div className='card-back-container'>
            <img
                className='card-img'
                src='images/bg-card-back.png'
                alt='preview of front of credit card '
            />
            <span className='cvc-code'>
                {cvc === null || !cvc ? '000' : cvc}
            </span>
        </div>
    );
}
