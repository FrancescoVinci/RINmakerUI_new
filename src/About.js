import { Spacer, Navbar, Text, Image } from "@nextui-org/react";
import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export default function About() {
    const navigate = useNavigate();

    const click = () => {
        navigate("/Rin2D", { state: { ciao: "ciao" } });
    }

    return (
        <div css={{ maxW: "100%" }} style={{ boxSizing: "border-box" }}>
            <Navbar css={{ $$navbarBlurBackgroundColor: "#F1E8FB" }} variant="floating">
                <Navbar.Brand>
                    <Image css={{ p: 5 }} objectFit="cover" width={50} src="img/navicon.png" />
                    <Text
                        h1
                        size={35}
                        css={{
                            p: 10,
                            textGradient: "45deg, $blue600 -20%, $purple600 70%",
                        }}
                        weight="bold"
                    >
                        RINmaker
                    </Text>
                </Navbar.Brand>

                <Navbar.Content activeColor={"secondary"} hideIn="xs" variant="highlight-rounded">
                    <Navbar.Link href="/">Home</Navbar.Link>
                    <Navbar.Link href="/Help">Help</Navbar.Link>
                    <Navbar.Link isActive href="/About">About</Navbar.Link>

                </Navbar.Content>

            </Navbar>

            <Container>
                <Spacer y={2}></Spacer>

                <Card className="shadow p-3 mb-5 bg-white rounded" border="light">

                    <Card.Body>

                        <h1>About RINmaker</h1>
                        <hr/>
                        <p><b>RINmaker</b> is a cross-platform open source software tool developed at <i>Ca' Foscari University of Venice</i> (DAIS and DSMN departments) by:</p>

                        <ul style={{ listStyle: "disc" }}>
                            <li><p>Alvise Spanò</p></li>
                            <li><p>Lorenzo Fanton</p></li>
                            <li>Davide Pizzolato</li>
                            <li>Jacopo Moi</li>
                            <li>Francesco Vinci</li>
                            <li>Alberto Pesce</li>
                            <li>Cedrix J. Dongmo Foumthuim</li>
                            <li>Achille Giacometti</li>
                            <li>Marta Simeoni</li>
                        </ul>

                        <p>The source code is available at <a href="https://github.com/RINmaker">github.com/RINmaker</a></p>

                    </Card.Body>
                </Card>
            </Container>

        </div>
    )
}
