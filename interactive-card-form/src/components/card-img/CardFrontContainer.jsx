const defaultPin = '0000 0000 0000 0000';
const defaultUsername = 'Jane Appleseed';

export default function CardFrontContainer({ username, pin, month, year }) {
    return (
        <div className='card-front-container'>
            <img
                className='card-img'
                src='images/bg-card-front.png'
                alt='preview of front of credit card '
            />
            <div className='shapes-container'>
                <div className='white-circle' role='img'></div>
                <div className='smaller-circle' role='img'></div>
            </div>
            <div className='bg-card-details-container'>
                <span className='bg-card-number'>
                    {pin === null || !pin ? defaultPin : pin}
                </span>
                <div className='bg-card-username'>
                    <span>
                        {username === null || !username
                            ? defaultUsername
                            : username}
                    </span>
                    <span>
                        {month === null || !month ? '00' : month.trim()}/
                        {year === null || !year ? '00' : year}
                    </span>
                </div>
            </div>
        </div>
    );
}
