import { createContext, useState } from 'react'

export const webContext = createContext()

// eslint-disable-next-line react/prop-types
export function WebContextProvider({ children }) {
    const [isModal, setIsModal] = useState(false)
    const [loading, setLoading] = useState(false)

    function activateModal() {
        !isModal && setIsModal(isModal ? false : true)
        isModal && setLoading(true)
        isModal && setTimeout(() => {
            setIsModal(isModal ? false : true)
            setLoading(false)
        }, 150);
    }

    return (
        <webContext.Provider value={{ isModal, activateModal, loading }}>
            {children}
        </webContext.Provider>
    )
}