import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "Manutenção de Estação Desktop",
            subtitle: "Prevenção atualização e otmização",
            srcImg: "./src/assets/images/desktop.png",
            description: "Realizo a manutenção, atualização, otimização, dos computadores na sua casa ou no seu escritório, avaliação do equipamento e orientações de hardware e software",
            technologies: "Manutenção Preventiva, Otimização, Atualização",
            whatsURL: "https://wa.me/5511912116623",
            emaiURL: "mailto:robson.silva90@outlook.com?subject=Solicitação de Visita&body=Gostaria de solicitar uma visita técnica para...",
        },
        {
            title: "Manutenção de Estação Notebook",
            subtitle: "Prevenção atualização e otmização",
            srcImg: "./src/assets/images/notebook.png",
            description: "Realizo a manutenção, atualização e otimização dos notebooks, analise de sistema operacional, proteção e avaliação de desempenho de hardware ",
            technologies: "Otimização de SO, Antivirus, avaliação de defasagem",
            whatsURL: "https://wa.me/5511912116623",
            emaiURL: "mailto:robson.silva90@outlook.com?subject=Solicitação de Visita&body=Gostaria de solicitar uma visita técnica para...",
        },
        {
            title: "Otimização de Redes de Computadores",
            subtitle: "Analise, recomendação de equipamentos, ajustes e otimização",
            srcImg: "./src/assets/images/redes.png",
            description: "Analise de infra-estrutura cabeada, redes WiFi, configuração de firewall, configuração de VPN, otimização",
            technologies: "Testes com ferramentas apropriadas, softwares de diagnosticos, conflitos de ip",
            whatsURL: "https://wa.me/5511912116623",
            emaiURL: "mailto:robson.silva90@outlook.com?subject=Solicitação de Visita&body=Gostaria de solicitar uma visita técnica para...",
        },
        {
            title: "Manutenção de Servidores",
            subtitle: "Analise de requisitos, atualização, otimização de software",
            srcImg: "./src/assets/images/servidores.png",
            description: "Realizo a analise de demanda para sistemas, administração de usuários em AD Windows e Linux, instalação, configuração e manutenção de hardware e software",
            technologies: "Instalação, Configuração, Manutenção em geral",
            whatsURL: "https://wa.me/5511912116623",
            emaiURL: "mailto:robson.silva90@outlook.com?subject=Solicitação de Visita&body=Gostaria de solicitar uma visita técnica para...",
        },
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Alguns de nossos serviços</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid item md={6} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    whatsURL={project.whatsURL}
                                    emaiURL={project.emaiURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection
