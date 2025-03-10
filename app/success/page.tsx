import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";



export default function Success() {
    return (
        <Box pt={8}>
            <Container maxWidth="sm">
                <Typography variant="h1">Thank You</Typography>
                <Typography mb={8} variant="h5">Your information was submitted to our team of immigration attorneys. Expect an email from hello@tryalma.ai</Typography>

                <Link href="/">
                    Return to Home
                </Link>
            </Container>
        </Box>
    );
}

