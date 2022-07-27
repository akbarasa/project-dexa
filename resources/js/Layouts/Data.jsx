import React, { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/inertia-react";
import Logo from "../../../storage/app/public/160-1605130_android-navigation-bar-icons-png-navigation-bar-home.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
export default function Data({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar className="" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={Logo}
                            className="w-14 h-15 fill-current text-gray-500"
                            alt=""
                            srcSet=""
                        ></img>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Dashboard</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="inline justify-content-end">
                        <Navbar.Text>
                            Signed in as:
                            <a href="#login">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        {auth.user.email}
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}
            <main className="bg-gray-900 h-screen relative overflow-hidden flex justify-center">
                {children}
            </main>
        </div>
    );
}
