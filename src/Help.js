import { Navbar, Text, Image, Spacer, Badge } from "@nextui-org/react";
import { BsInfoLg } from 'react-icons/bs';
import { Table, Card, Stack, Container } from "react-bootstrap";
import { BsFillTagFill } from 'react-icons/bs';



export default function Help() {
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
                    <Navbar.Link isActive href="/Help">Help</Navbar.Link>
                    <Navbar.Link href="/About">About</Navbar.Link>

                </Navbar.Content>

            </Navbar>

            <Container>
                <Spacer y={2}></Spacer>

                <Card className="shadow p-3 mb-5 bg-white rounded" border="light">

                    <Card.Body>

                        <div className="text-center">
                            <img alt="logo" src="img/logo2.png" width={500} className="text-center"></img>
                        </div>


                        <Stack direction="horizontal" gap={0}>
                            <BsInfoLg size={25} />
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
                            <Badge enableShadow disableOutline color="success"><BsFillTagFill />&nbsp;v0.1.3</Badge>
                        </Stack>

                        <hr />


                        <b>RINmaker</b> is a software tool that receives in input a protein structure (in <i>pdb</i> or <i>mmCIF</i> format) and creates the corresponding <b>RIN</b> (<i>Residue Interaction Network</i>) where nodes are amino acids and edges represent the non-covalent interactions.

                        <h1>Usage</h1>
                        <hr />

                        <p>The RINmaker Home page contains two main sections:</p>
                        <ul style={{ listStyle: "disc" }}>
                            <li><p><strong>Input section</strong>: it allows for choosing between loading a .pdb file from the local computer or for entering the PDB databank identifier;</p></li>
                            <li><p><strong>Options section</strong>: it allows for specifying the input parameters (see the complete list below)</p></li>
                        </ul>

                        <p>Once the input file and parameter have been specified it is possible to choose among the following three options:</p>       

                        <ul style={{ listStyle: "disc" }}>
                            <li><p><strong>Generate XML</strong>: the input pdb file is passed to the RINmaker executable that will produce the corresponding RIN as an xml file, which can be downloaded. The log information will be also shown.</p></li>
                            <li><p><strong>2D RIN</strong>: the input pdb file is passed to the RINmaker executable that will produce a 2-dimensional graph representing the RIN of the input pdb file.</p></li>
                            <li><p><strong>3D RIN</strong>: the input pdb file is passed to the RINmaker executable that will produce a 3-dimensional graph representing the RIN of the input pdb file.</p></li>
                        </ul>

                        <h1>Parameters</h1>
                        <hr />

                        <p>Here follows the list of types and default values of the input parameters:</p>

                        <p className="code" style={{ color: "#7828C8", fontSize: 20 }}><b>options</b></p>

                        <Table striped>
                            <tbody>
                                <tr>
                                    <td><p className="code"><b>-n, --no-hydrogen</b></p></td>
                                    <td>boolean</td>
                                    <td>Skip hydrogen fixing</td>

                                </tr>
                                <tr>
                                    <td><p className="code"><b>-w, --keep-water</b></p></td>
                                    <td>boolean</td>
                                    <td>Keep water residues</td>

                                </tr>
                                <tr>
                                    <td><p className="code"><b>-s,--sequence-separation</b></p></td>
                                    <td>INT:POSITIVE=3</td>
                                    <td>Minimum sequence separation</td>

                                </tr>
                                <tr>
                                    <td><p className="code"><b>--illformed</b></p></td>
                                    <td>ENUM:&#123;fail,kall,kres,sres&#125;=sres</td>
                                    <td>Behaviour in case of malformed ring or ionic group</td>

                                </tr>

                            </tbody>
                        </Table>


                        <p style={{ color: "#7828C8", fontSize: 20, fontFamily: "Source Code Pro" }}><b>rin</b></p>
                        <p>Compute the residue interaction network</p>

                        <Table striped>
                            <tbody>
                                <tr>
                                    <td><p className="code"><b>--policy</b></p></td>
                                    <td>ENUM:&#123;all,multiple,one&#125;=all</td>
                                    <td>Affects which edges are kept per pair of aminoacids</td>

                                </tr>
                                <tr>
                                    <td><p className="code"><b>--hydrogen-bond</b></p></td>
                                    <td>FLOAT:POSITIVE=3.5</td>
                                    <td>Query distance for hydrogen bonds</td>

                                </tr>
                                <tr>
                                    <td><p className="code"><b>--vdw-bond</b></p></td>
                                    <td>FLOAT=0.5</td>
                                    <td>Surface distance for vdw bonds</td>

                                </tr>
                                <tr>
                                    <td><p className="code"><b>--ionic-bond</b></p></td>
                                    <td>FLOAT:POSITIVE=4</td>
                                    <td>Query distance for ionic bonds</td>

                                </tr>
                                <tr>
                                    <td><p className="code"><b>--pication-bond</b></p></td>
                                    <td>FLOAT:POSITIVE=5</td>
                                    <td>Query distance for cation-pi bonds</td>

                                </tr>
                                <tr>
                                    <td><p className="code"><b>--pipistack-bond</b></p></td>
                                    <td>FLOAT:POSITIVE=6.5</td>
                                    <td>Query distance for pi-pi stackings</td>

                                </tr>
                                <tr>
                                    <td><p className="code"><b>--h-bond-angle</b></p></td>
                                    <td>FLOAT:POSITIVE=63</td>
                                    <td>Angle for hydrogen bonds</td>

                                </tr>
                                <tr>
                                    <td><p className="code"><b>--pication-angle</b></p></td>
                                    <td>FLOAT:POSITIVE=45</td>
                                    <td>Angle for cation-pi bonds</td>

                                </tr>
                                <tr>
                                    <td><p className="code"><b>--pipistack-normal-normal</b></p></td>
                                    <td>FLOAT:POSITIVE=30</td>
                                    <td>Angle range from normal to normal for pi-pi stackings</td>

                                </tr>
                                <tr>
                                    <td><p className="code"><b>--pipistack-normal-centre</b></p></td>
                                    <td>FLOAT:POSITIVE=60</td>
                                    <td>Angle range from normal to centre for pi-pi stackings</td>
                                </tr>


                            </tbody>
                        </Table>

                        <p style={{ color: "#7828C8", fontSize: 20, fontFamily: "Source Code Pro" }}><b>cmap</b></p>
                        <p>Compute the contact map of the protein</p>

                        <Table striped>
                            <tbody>
                                <tr>
                                    <td><p className="code"><b>--type</b></p></td>
                                    <td>ENUM:&#123;ca,cb&#125;=ca</td>
                                    <td>Type of contact map (alpha/beta carbon)</td>

                                </tr>
                                <tr>
                                    <td><p className="code"><b>--distance</b></p></td>
                                    <td>FLOAT:POSITIVE=6</td>
                                    <td>Query distance between alpha/beta carbons</td>

                                </tr>
                            </tbody>

                        </Table>

                        <p>For more information visit the About page.</p>

                        <h1>Technical information</h1>
                        <hr />

                        <p>This platform has been tested on:</p>
                        <ul style={{ listStyle: "disc" }}>
                            <li><p><strong>Google Chrome</strong> (Windows, OS X El Capitan) 90.0.4430.212</p></li>
                            <li><p><strong>Opera</strong>, (Windows) 76.0.4017.123</p></li>
                            <li><p><strong>Firefox</strong>, (Windows, Ubuntu 20.10) 88.0.1</p></li>
                            <li><p><strong>Microsoft Edge</strong>, (Windows) 90.0.818.62</p></li>
                        </ul>


                        <p>For <i>smoother</i> graph display please activate <b>hardware acceleration</b> of your browser (chrome in the example).</p>
                        
                        <img alt="hardware-acc" src="img/hardware-acc.png" width={800} className="img-fluid border"></img>

                        <br/><br/>

                        <h1>Examples</h1>
                        <hr/>



                    </Card.Body>
                </Card>
            </Container>

        </div>
    )
}
