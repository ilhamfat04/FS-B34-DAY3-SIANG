import { useEffect, useContext } from "react";
import { Container } from "react-bootstrap";

import { UserContext } from "./context/UserContext";

export default function ExampleComp() {

    const [state, dispatch] = useContext(UserContext)
    console.log(state);
    // const { user } = props
    // console.log("Value from props ExampleComp : ", user?.email);

    // useEffect(() => {
    //     console.log("Data props is updated");
    // }, [props])

    return <Container>Email : {state?.user?.email}</Container>
}