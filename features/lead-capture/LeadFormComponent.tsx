import { Box, FormControl, OutlinedInput } from "@mui/material";
import Uploader from "../upload/Uploader";

const LeadFormComponent = () => {
    return (
        <Box
            sx={{
                mt: 4,
                '& > *': {
                    mb: 1,
                },
            }}
            width={"100%"} maxWidth={500}>
            <FormControl fullWidth>
                <OutlinedInput fullWidth type="text" placeholder="First Name" />
            </FormControl>

            <Uploader />
        </Box>
    );
};


export default LeadFormComponent;