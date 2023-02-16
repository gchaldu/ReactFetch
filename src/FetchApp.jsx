import { useFetch } from "./hooks/useFetch"
import { useCounter } from "./hooks/useCounter"
import { LoadingQuote } from './LoadingQuote'
import { Quote } from "./Quote";

export const FetchApp = () => {

    const { counter, increment, decrement, reset } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    //console.log({data, isLoading, hasError})
    const { author, quote } = !!data && data[0];
    console.log("Data solo " + data);
    console.log("Data una sola negación " + !data);
    console.log("Data dos negaciones " + !!data);
    return (
        <>
            <h1>Fetch App</h1>
            <hr />
            {
                isLoading === true
                    ? (<LoadingQuote />)
                    : <Quote quote={quote} author={author}/>
            }
            <button onClick={() => decrement()} className="btn btn-primary m-2" disabled={isLoading}>Anterior quote</button>
            <button onClick={() => increment()} className="btn btn-primary m-2" disabled={isLoading}>Next quote</button>
            <button onClick={() => reset()} className="btn btn-primary">Home</button>
        </>

    )
}
