import { useEffect } from "react";

function useOutsideClick( ref, handler ) {

    useEffect(() => {

        function listener(e){
            if(!ref.current || ref.current.contains(e.target)){
                return
            }

            handler(e)
        }
        
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mouseDown', listener);
            document.removeEventListener('touchstart', listener);
        }
    },[handler, ref])
}

export default useOutsideClick;