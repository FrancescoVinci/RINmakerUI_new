import { Text } from "@nextui-org/react";
import { Modal, Container } from "react-bootstrap";

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Pie, Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);



export default function ModalChart(props) {

    const res_list = ["ARG", "LYS", "ASN", "GLN", "HIS", "CYS", "ILE", "LEU", "MET", "PHE", "PRO", "TRP", "TYR", "VAL", "ALA", "GLY", "SER", "THR", "ASP", "GLU"];
    const res_cols = ["#0000ff", "#0000ff", "#ff00ff", "#ff00ff", "#ff00ff", "#008000", "#008000", "#008000", "#008000", "#008000", "#008000", "#008000", "#008000", "#008000", "#ffa500", "#ffa500", "#ffa500", "#ffa500", "#ff0000", "#ff0000"];
    const bond_list = ['IONIC', 'HBOND', "VDW", "SSBOND", "PIPISTACK", "PICATION", "IAC"];
    const bond_cols = ["#0000ff", "#87cefa", "#ffd700", "#9C31F9", "#ff0000", "#9acd32", "#dcdcdc"];
    const ext = ["main-chain main-chain", "side-chain side-chain", "main-chain side-chain", "side-chain main-chain"];

    console.log(props.avg_e_bond);

    const hbondData = {
        labels: ext,
        datasets: [
            {
                label: "Total in %",
                data: props.hbond_ext_count,
                backgroundColor: ["#FF5733", "#FFE633", "#33A8FF", "#87FC53"],
            },
        ],
    };

    const residueData = {
        labels: res_list,
        datasets: [
            {
                data: props.res_count,
                backgroundColor: res_cols,
            },
        ],
    }

    const bondsCountData = {
        labels: bond_list,
        datasets: [
            {
                label: "Total",
                backgroundColor: bond_cols,
                data: props.bond_count
            }
        ]
    }

    const energyBond = {
        labels: bond_list,
        datasets: [
            {
                label: "AVG kj/mol",
                backgroundColor: bond_cols,
                data: props.avg_e_bond,
            }
        ]
    }

    const distanceBond = {
        labels: bond_list,
        datasets: [
            {
                label: "AVG: ",
                backgroundColor: bond_cols,
                data: props.avg_dist_bond
            }
        ]
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header style={{ backgroundColor: "#F1E8FB" }} closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <Text
                        h3
                        size={30}
                        css={{
                            p: 2,
                            textGradient: "45deg, $blue600 -20%, $purple600 70%",
                        }}
                    >
                        Statistics
                    </Text>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <p>#Nodes: <b>{props.num_nodes}</b></p>
                    <p>#Links: <b>{props.num_links}</b></p>

                    <br />
                    <h5 className="text-center">Hydrogen bonds per type (in %)</h5>
                    <hr />

                    <Container style={{ width: "60%" }}>
                        <Pie
                            options={{
                                maintainAspectRatio: true,
                                responsive: true,
                            }}
                            data={hbondData}
                        />
                    </Container>

                    <br />
                    <h5 className="text-center">Residue Count</h5>
                    <hr />

                    <Container style={{ width: "90%" }}>
                        <Bar
                            options={{
                                plugins: {
                                    legend: { display: false }
                                },
                                maintainAspectRatio: true,
                                responsive: true,
                            }}
                            data={residueData}
                        />

                    </Container>

                    <br />
                    <h5 className="text-center">Bonds Count</h5>
                    <hr />

                    <Container style={{ width: "60%" }}>
                        <Doughnut
                            data={bondsCountData}
                            options={{
                                responsive: true,
                                maintainAspectRatio: true
                            }}
                        />
                    </Container>

                    <br />
                    <h5 className="text-center">Average energy per type of bond (kj/mol)</h5>
                    <hr />

                    <Container style={{ width: "90%" }}>
                        <Bar
                            options={{
                                indexAxis: 'y',
                                plugins: {
                                    legend: { display: false }
                                },
                                maintainAspectRatio: true,
                                responsive: true,
                            }}
                            data={energyBond}
                        />
                    </Container>

                    <br />
                    <h5 className="text-center">Average distance per type of bond</h5>
                    <hr />

                    <Container style={{ width: "90%" }}>
                        <Bar
                            options={{
                                indexAxis: 'y',
                                plugins: {
                                    legend: { display: false }
                                },
                                maintainAspectRatio: true,
                                responsive: true,
                            }}
                            data={distanceBond}
                        />
                    </Container>


                </Container>
            </Modal.Body>
        </Modal>
    );
}