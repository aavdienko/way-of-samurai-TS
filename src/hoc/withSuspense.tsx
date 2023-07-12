import { ComponentType, Suspense } from "react"
import { Preloader } from "../common/preloader/Preloader"


// можно удалить, проблемы с типом
export function withSuspense<T>(Component: ComponentType<T>) {

  return (props: any) => {
    <Suspense fallback={<Preloader/>}>
      <Component {...props as T & {children?: React.ReactNode}}/>
    </Suspense>

  }
}