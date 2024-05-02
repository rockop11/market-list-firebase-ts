import { Outlet } from "react-router-dom"
import { Navbar } from "../../components"
import { Container } from "@mui/material"

export const Layout = () => {

    return (
        <Container maxWidth="sm" sx={{ padding: '0 !important', position: 'relative' }}>
            <Navbar />

            <Container maxWidth="sm" sx={{ paddingTop: '20px' }}>
                <Outlet />
            </Container>
        </Container>

    )
}

