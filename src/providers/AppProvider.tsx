'use client'

import type { PropsWithChildren } from "react"
import dayjs from "dayjs";
import 'dayjs/locale/id'

dayjs.locale("id");

const AppProvider = ({children}: PropsWithChildren) => {
  return (
    <>
        {children}
    </>
  )
}
export default AppProvider