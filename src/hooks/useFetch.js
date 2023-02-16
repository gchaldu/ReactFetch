import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

    const getFetch = async () => {
        setState({
            ...state,
            isLoading: true,
        })

        const respuesta = await fetch(url);
        const data = await respuesta.json();

        setState({
            data: data,
            isLoading: false,
            hasError: null,
        })
        //console.log(data);
    }
    //cada vez que cambie la peticion se redibuja
    useEffect(() => {
        getFetch();
    }, [url])

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}
