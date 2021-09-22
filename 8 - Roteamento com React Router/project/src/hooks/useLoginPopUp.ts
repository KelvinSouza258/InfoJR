import { useState } from 'react'

const useLoginMsg = () => {
    const [msgVisible, setMsgVisible] = useState(false)
    const [success, setSuccess] = useState(false)

    const showLoginMsg: (
        show: 'show' | 'hide',
        success?: 'success' | 'error'
    ) => void = (show, success) => {
        setMsgVisible(show === 'show')
        setSuccess(success === 'success')
    }
    return <
        {
            msgVisible: boolean
            success: boolean
            showLoginMsg: (
                show: 'show' | 'hide',
                success?: 'success' | 'error'
            ) => void
        }
    >{ msgVisible, success, showLoginMsg }
}

export default useLoginMsg
