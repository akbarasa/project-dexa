import React from "react";
import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Data from "@/Layouts/Data";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Tambahdata(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        nama_karyawan: "",
        tanggal_lahir: "",
        kota_kelahiran: "",
        jenis_kelamin: "",
        nomor_ktp: "",
    });

    function submit(e) {
        e.preventDefault();

        post(route("employees.store"));
    }

    return (
        <Data auth={props.auth} errors={props.errors}>
            <Head title="Tambahdata" />
            <Form onSubmit={submit} name="createForm" className="in">
                <div className="text-white ">
                    <h1 className="title title-primary">Data Karyawan</h1>
                </div>
                <Form.Group>
                    <Form.Label className="text-white">
                        Nama Karyawan{" "}
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Input Nama"
                        className="in"
                        name="nama_karyawan"
                        value={data.nama_kayawan}
                        required
                        onChange={(e) =>
                            setData("nama_karyawan", e.target.value)
                        }
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="text-white">
                        Tanggal Lahir{" "}
                    </Form.Label>
                    <Form.Control
                        type="date"
                        className="in"
                        name="tanggal_lahir"
                        value={data.tanggal_lahir}
                        required
                        onChange={(e) =>
                            setData("tanggal_lahir", e.target.value)
                        }
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="text-white">
                        Kota Kelahiran{" "}
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Input Kota"
                        className="in"
                        name="kota_kelahiran"
                        value={data.kota_kelahiran}
                        required
                        onChange={(e) =>
                            setData("kota_kelahiran", e.target.value)
                        }
                    />
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label className="text-white">
                        Jenis Kelamin{" "}
                    </Form.Label>
                    <Col sm={12}>
                        <Form.Check
                            className="text-white"
                            type="radio"
                            label="Female"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            value="Female"
                            required
                            onChange={(e) =>
                                setData("jenis_kelamin", e.target.value)
                            }
                            inline
                        />
                        <Form.Check
                            className="text-white"
                            type="radio"
                            label="Male"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            value="Male"
                            required
                            onChange={(e) =>
                                setData("jenis_kelamin", e.target.value)
                            }
                            inline
                        />
                    </Col>
                </Form.Group>
                <Form.Group>
                    <Form.Label className="text-white">Nomor KTP </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Input KTP"
                        className="in"
                        name="nomor_ktp"
                        value={data.nomor_ktp}
                        required
                        onChange={(e) => setData("nomor_ktp", e.target.value)}
                    />
                </Form.Group>
                <Input
                    type="submit"
                    className="ml-14 mt-3 cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-opacity-80"
                />
            </Form>
        </Data>
    );
}
