import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@/Components/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Dashboard(props) {
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="Dashboard" />
            <Link href={route("employees.create")}>
                <Button className="mt-4 text-white mb-4 ml-4">
                    Tambah Data
                </Button>
            </Link>
            <div className="min-h-screen text-l ml-4">
                <Row className="row-cols-1 row-cols-md-4 g-4">
                    {props.Employee
                        ? props.Employee.map((data, i) => {
                              return (
                                  <Col>
                                      <Card style={{ width: "18rem" }} key={i}>
                                          <Card.Header>
                                              <p>Data Karyawan No. {i + 1}</p>
                                          </Card.Header>
                                          <Card.Body>
                                              <Card.Text>
                                                  <p>
                                                      Nama Karyawan ={" "}
                                                      {data.nama_karyawan}
                                                  </p>
                                              </Card.Text>
                                          </Card.Body>
                                          <ListGroup className="list-group-flush">
                                              <ListGroup.Item>
                                                  <p>
                                                      Tanggal Lahir ={" "}
                                                      {data.tanggal_lahir}
                                                  </p>
                                              </ListGroup.Item>
                                              <ListGroup.Item>
                                                  <p>
                                                      Kota Kelahiran ={" "}
                                                      {data.kota_kelahiran}
                                                  </p>
                                              </ListGroup.Item>
                                              <ListGroup.Item>
                                                  <p>
                                                      Jenis kelamin =
                                                      {data.jenis_kelamin}
                                                  </p>
                                              </ListGroup.Item>
                                              <ListGroup.Item>
                                                  <p>KTP = {data.nomor_ktp}</p>
                                              </ListGroup.Item>
                                          </ListGroup>
                                      </Card>
                                  </Col>
                              );
                          })
                        : ""}
                </Row>
            </div>
        </Authenticated>
    );
}
