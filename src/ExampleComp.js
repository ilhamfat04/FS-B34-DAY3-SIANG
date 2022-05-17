import { useEffect } from "react";
import { Container } from "react-bootstrap";

export default function ExampleComp(props) {

    const { user } = props
    console.log("Value from props ExampleComp : ", user?.email);

    useEffect(() => {
        console.log("Data props is updated");
    }, [props])

    return <Container>Email : {props.user.email}</Container>
}