import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);
    return (
        <div> 
    <P>The page you are trying is not available</P>
    </div>
    );
}