import { useEffect } from "react"

const useTitle= (title)=>{

    useEffect(()=>{
        document.title=`${title}- American News`;
    }, [title])
}
export default useTitle