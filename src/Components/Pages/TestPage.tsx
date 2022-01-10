import React, {useState} from "react";
import SuperButton from "../SuperComponents/SuperButton";
import SuperCheckbox from "../SuperComponents/SuperCheckbox";
import SuperInput from "../SuperComponents/SuperInput";

const TestPage = () => {
    const [text, setText] = useState<string>('')
    const error = text ? '' : 'error'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text)
        }
    }

    const [checked, setChecked] = useState<boolean>(false)

    return (
        <div>
            <div>
                <SuperInput
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                />

                <SuperButton>
                    default
                </SuperButton>


                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    some text {/*// этот текст попадёт в children*/}
                </SuperCheckbox>

            </div>


        </div>
    )
}

export default TestPage