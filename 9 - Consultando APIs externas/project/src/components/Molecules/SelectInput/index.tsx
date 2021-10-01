import React, { useRef, useState } from 'react'

import useOnClickOutside from '../../../hooks/useClickOutSide'
import { Option } from '../../Atoms'
import { Menu, OptionsContainer, SelectedOption } from './styles'

interface ISelectProps {
    label: string
    state: string
    setState: React.Dispatch<React.SetStateAction<string>>
    data: string[]
}

const SelectInput: React.FC<ISelectProps> = ({
    label,
    state,
    setState,
    data
}: ISelectProps) => {
    const [menuOpen, setMenuOpen] = useState(false)

    const inputRef = useRef(null)

    useOnClickOutside(inputRef, () => setMenuOpen(false))

    return (
        <Menu ref={inputRef}>
            {label}
            <SelectedOption
                role="button"
                tabIndex={0}
                onClick={() => setMenuOpen(!menuOpen)}
                className={`${menuOpen ? 'swap-icon' : ''} ${
                    state === '' ? 'placeholder' : ''
                }`}
            >
                {state === '' ? `Select a ${label.toLowerCase()}` : state}
            </SelectedOption>
            <OptionsContainer
                className={menuOpen ? 'active' : ''}
                onClick={(e) => {
                    const target = e.target as HTMLInputElement

                    if (target.value !== undefined) {
                        setState(target.value)
                        setMenuOpen(false)
                    }
                }}
            >
                {data.sort().map((item) => (
                    <Option
                        key={item}
                        value={item}
                        variant={state === item ? 'selected' : 'default'}
                    />
                ))}
            </OptionsContainer>
        </Menu>
    )
}

export default SelectInput
