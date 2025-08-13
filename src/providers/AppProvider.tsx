'use client'

import type { PropsWithChildren } from "react"

const AppProvider = ({children}: PropsWithChildren) => {
  return (
    <>
        {children}
    </>
  )
}
export default AppProvider