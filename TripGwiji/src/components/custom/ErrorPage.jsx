import { useRouteError } from "react-router-dom";

export default function ErrorPage(){
    const error = useRouteError();
    console.log(error);
    return <div>The page you are trying is not available</div>;
}