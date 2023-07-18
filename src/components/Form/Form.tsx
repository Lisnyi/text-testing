import { FC, useState, ChangeEventHandler, FormEventHandler, Dispatch, SetStateAction } from 'react'
import { splitText } from '../../utils'
import type { UnicElement } from '../../types'
import './Form.css'

type Props = {
    changeSymbol: Dispatch<SetStateAction<UnicElement>>
}

export const Form: FC<Props> = ({changeSymbol}) => {
  
    const [typedText, setTypedText] = useState('')
  
    const handleChange: ChangeEventHandler<HTMLTextAreaElement> = ({target}) => {
        setTypedText(target.value)
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        const symbol = splitText(typedText.trim())
        changeSymbol(symbol)
    }

    return (
    <form onSubmit={handleSubmit} id='forma' className='Form'>
        <textarea className='Text-input' value={typedText} onChange={handleChange} name='text' autoFocus={true} placeholder='Type text to analyze' required/>
        <button className='Button' type='submit'>Analyze</button>
    </form>
  )
}
