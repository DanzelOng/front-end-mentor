import { useState, useReducer } from 'react';
import {
    cardInitialState,
    formInitialState,
    validate,
} from '../utils/validation';
import Main from './layout/Main';
import BackgroundImageContainer from './layout/BackgroundImageContainer';
import FormContainer from './layout/FormContainer';
import Form from './layout/Form';
import CardFrontContainer from './card-img/CardFrontContainer';
import CardBackContainer from './card-img/CardBackContainer';
import CardUsername from './Form/CardUsername';
import CardPin from './Form/CardPin';
import CardDetails from './layout/CardDetails';
import Button from './button/Button';
import CardCvc from './Form/CardCvc';
import CardDate from './Form/CardDate';
import CardSuccess from './success/CardSuccess';
import Footer from './layout/Footer';

const reducer = function (state, action) {
    switch (action.type) {
        case 'username':
            return { ...state, username: action.payload };
        case 'pin':
            return { ...state, pin: action.payload };
        case 'month':
            return { ...state, month: action.payload };
        case 'year':
            return { ...state, year: action.payload };
        case 'cvc':
            return { ...state, cvc: action.payload };
        case 'reset':
            return cardInitialState;
        default:
            return new Error('Unknown action');
    }
};

export default function App() {
    const [{ username, pin, month, year, cvc }, dispatch] = useReducer(
        reducer,
        cardInitialState
    );
    const [formStatus, setFormStatus] = useState(formInitialState);
    const [isReset, setIsReset] = useState(false);

    const handleReset = function () {
        dispatch({ type: 'reset' });
        setFormStatus(formInitialState);
        setIsReset(false);
    };

    const handleSubmit = function () {
        const {
            nameStatus,
            pinStatus,
            monthStatus,
            yearStatus,
            cvcStatus,
            allValid,
        } = validate(username, pin, month, year, cvc);

        const updatedStatus = {
            field1: nameStatus,
            field2: pinStatus,
            field3: monthStatus,
            field4: yearStatus,
            field5: cvcStatus,
        };

        allValid ? setIsReset(true) : setFormStatus(updatedStatus);
    };

    return (
        <Main>
            <BackgroundImageContainer>
                <CardFrontContainer
                    username={username}
                    pin={pin}
                    month={month}
                    year={year}
                />
                <CardBackContainer cvc={cvc} />
            </BackgroundImageContainer>
            <FormContainer>
                {!isReset ? (
                    <Form onHandleSubmit={handleSubmit}>
                        <CardUsername
                            username={username}
                            status={formStatus}
                            dispatch={dispatch}
                        />
                        <CardPin
                            pin={pin}
                            status={formStatus}
                            dispatch={dispatch}
                        />
                        <CardDetails>
                            <CardDate
                                month={month}
                                year={year}
                                status={formStatus}
                                dispatch={dispatch}
                            />
                            <CardCvc
                                cvc={cvc}
                                status={formStatus}
                                dispatch={dispatch}
                            />
                        </CardDetails>
                        <Button content='Confirm' onBtnClick={handleSubmit} />
                        <Footer />
                    </Form>
                ) : (
                    <CardSuccess onReset={handleReset} />
                )}
            </FormContainer>
        </Main>
    );
}
