import { useFetch } from "./hooks/useFetch"
import { useCounter } from "./hooks/useCounter";

export const FetchApp = () => {

    const { counter, increment, decrement, reset } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    //console.log({data, isLoading, hasError})
    const { author, quote } = !!data && data[0];
    return (
        <>
            <h1>Fetch App</h1>
            <hr />
            {
                isLoading === true
                    ? (<div className="alert alert-info text-center">Cargando...</div>)
                    : <blockquote className="blockquote text-end">
                        <p className="mb-10">{quote}</p>
                        <footer className="blockquote-footer text-center">{author}</footer>
                    </blockquote>
            }
            <button onClick={() => decrement()} className="btn btn-primary m-2" disabled={isLoading}>Anterior quote</button>
            <button onClick={() => increment()} className="btn btn-primary m-2" disabled={isLoading}>Next quote</button>
            <button onClick={() => reset()} className="btn btn-primary">Home</button>
        </>

    )
}
