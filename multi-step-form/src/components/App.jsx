import { useReducer } from 'react';
import { formInitialState } from '../utils/data';
import reducer from '../utils/helper';
import Main from './layout/Main';
import Sidebar from './sidebar/Sidebar';
import FormContainer from './layout/FormContainer';
import PersonalDetails from './Form/PersonalDetails';
import Plan from './form/Plan';
import AddOns from './form/AddOns';
import Summary from './form/Summary';
import Success from './form/Success';
import ButtonContainer from './layout/ButtonContainer';
import Button from './button/Button';
import '../styles/global.css';

const getCurrentComponent = function (index) {
    return {
        1: PersonalDetails,
        2: Plan,
        3: AddOns,
        4: Summary,
    }[index];
};

export default function App() {
    const [{ index, isReset, ...restState }, dispatch] = useReducer(
        reducer,
        formInitialState
    );
    const CurrentComponent = getCurrentComponent(index);

    return (
        <Main>
            <Sidebar index={index} />
            <FormContainer>
                {!isReset ? (
                    <>
                        <CurrentComponent
                            formDetails={restState}
                            dispatch={dispatch}
                        />
                        <ButtonContainer>
                            {index !== 1 && (
                                <Button
                                    content='Go Back'
                                    style='btnPrevious'
                                    type='previous'
                                    index={index}
                                    dispatch={dispatch}
                                />
                            )}
                            {index < 4 && (
                                <Button
                                    content='Next Step'
                                    style='btnNext'
                                    type='next'
                                    index={index}
                                    formDetails={restState}
                                    dispatch={dispatch}
                                />
                            )}
                            {index === 4 && (
                                <Button
                                    content='Confirm'
                                    style='btnConfirm'
                                    type='confirm'
                                    index={index}
                                    formDetails={restState}
                                    dispatch={dispatch}
                                />
                            )}
                            {isReset && (
                                <Button
                                    content='Submit Again'
                                    style='btnResubmit'
                                    type='resubmit'
                                    dispatch={dispatch}
                                />
                            )}
                        </ButtonContainer>
                    </>
                ) : (
                    <Success dispatch={dispatch} />
                )}
            </FormContainer>
        </Main>
    );
}
