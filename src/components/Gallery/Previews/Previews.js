import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import axios from "../../../axios-server";

import Preview from "./Preview/Preview";

import "./Previews.css";

const Previews = () => {
    const [weddings, setWeddings] = useState([]);

    useEffect(() => {
        axios.get(`/weddings.json`).then((res) => {
            const weddings = [];
            for (let key in res.data) {
                weddings.push(
                    <Preview
                        key={key}
                        imgSrc={res.data[key].previewPath}
                        name={res.data[key].coupleName}
                        link={"wedding/" + res.data[key].linkName}
                        folderPath={key}
                    />
                );
            }
            setWeddings(weddings);
        });
    }, []);

    return (
        <Container className="previews">
            <Row>{weddings}</Row>
        </Container>
    );
};

export default Previews;
