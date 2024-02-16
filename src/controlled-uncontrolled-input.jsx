import React, { useState, useRef } from 'react';

function ControlledAndUncontrolledInput() {
    // Состояние для контролируемого инпута
    const [controlledInputValue, setControlledInputValue] = useState('');
    // Ref для неконтролируемого инпута
    const uncontrolledInputRef = useRef(null);

    // Обработчик изменения для контролируемого инпута
    const handleControlledInputChange = (event) => {
        setControlledInputValue(event.target.value);
    };

    // Функция для вывода значений обоих инпутов
    const handleSubmit = (event) => {
        event.preventDefault(); // Предотвращаем стандартное поведение формы
        alert(`Controlled Input: ${controlledInputValue}, Uncontrolled Input: ${uncontrolledInputRef.current.value}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Контролируемый инпут:
                    <input
                        type="text"
                        value={controlledInputValue}
                        onChange={handleControlledInputChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Неконтролируемый инпут:
                    <input
                        type="text"
                        ref={uncontrolledInputRef}
                    />
                </label>
            </div>
            <button type="submit">Отправить</button>
        </form>
    );
}

export default ControlledAndUncontrolledInput;