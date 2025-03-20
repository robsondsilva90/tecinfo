import { Box, Container, IconButton, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer: React.FC = () => {

    return (
        <>
            <Box pt={2} pb={2}>
                <Container maxWidth="sm">
                    <Box display="flex" alignItems="center" justifyContent="space-around" pb={1}>
                        <IconButton onClick={() => window.open("https://github.com/robsondsilva90")}>
                            <GitHubIcon />
                        </IconButton>
                        <IconButton onClick={() => window.open("https://www.linkedin.com/in/robsondsilva90/")}>
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton href="mailto:robson.dsilva90@gmail.com" target="_blank">
                            <EmailIcon />
                        </IconButton>
                    </Box>
                    <Typography textAlign="center">
                        R. Ibitiba, 178 - JD. IV Centenário - Guarulhos SP - 07161-030
                    </Typography>
                </Container>
            </Box>
        </>
    )
}

export default Footer
