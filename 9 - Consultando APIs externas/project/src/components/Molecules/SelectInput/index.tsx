import React, { useEffect, useState } from 'react'

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

    useEffect(() => setState(`Select a ${label.toLowerCase()}`), [])

    return (
        <Menu>
            {label}
            <SelectedOption
                role="button"
                tabIndex={0}
                onClick={() => setMenuOpen(!menuOpen)}
                className={menuOpen ? 'swap-icon' : ''}
            >
                {state}
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
