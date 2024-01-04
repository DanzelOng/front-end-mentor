export default function Form({ children, onHandleSubmit }) {
    return (
        <form
            className='form'
            autoComplete='off'
            onSubmit={(e) => {
                e.preventDefault();
                onHandleSubmit();
            }}
        >
            {children}
        </form>
    );
}
