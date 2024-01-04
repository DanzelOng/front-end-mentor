function Button({ content, onBtnClick }) {
    return (
        <button
            className='btn'
            type='submit'
            onClick={(e) => {
                e.preventDefault();
                onBtnClick();
            }}
        >
            {content}
        </button>
    );
}

export default Button;
