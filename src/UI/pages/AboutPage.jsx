import PageHeader from "../pages/PageHeader";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useTheme } from "../providers/ThemeProvider";

const AboutPage = () => {
    const {isDark} = useTheme();
    return (
        <Container>
            <PageHeader
                title="About Us"
                subtitle="On this page you can find explanations about the application"
            />

            <Grid container spacing={2}>
                <Grid item md={8} xs={12} sx={{color: isDark ? "white" : "black"}} textAlign="start" alignSelf="center">
                <Typography>
                    Our Business Card Management System is meticulously crafted to
                    empower users in efficiently managing their business contacts.
                    Whether you're a seasoned professional aiming to streamline your
                    networking endeavors or a burgeoning entrepreneur seeking to
                    organize your connections, our platform caters to all your needs.
                </Typography>
                <br />

                <Typography>
                    Within our system, users are granted distinct permissions: Admin,
                    User, or Guest. Each role encompasses specific functionalities
                    tailored to enhance user experience and cater to varying
                    requirements.
                </Typography>
                <br />

                <Typography>
                    One of the key features of our platform is the expansive collection
                    of business cards spanning numerous industries and companies. Users
                    have the freedom to browse through this extensive catalog,
                    facilitating seamless discovery and networking opportunities.
                </Typography>
                <br />

                <Typography>
                    Furthermore, our platform facilitates the creation, customization,
                    and viewing of business cards with utmost ease. Users can
                    effortlessly build their personalized business cards.
                </Typography>
                <br />

                <Typography>
                    Our intuitive user interface serves as a cornerstone of our
                    platform, ensuring a seamless and user-friendly experience for all
                    users. Whether you're searching for specific contacts or exploring
                    various categories, our interface simplifies navigation and
                    facilitates efficient information retrieval.
                </Typography>
                <br />

                <Typography>
                    In essence, our Business Card Management System is more than just a
                    tool—it's a comprehensive solution designed to elevate networking
                    experiences and foster meaningful connections in today's dynamic
                    business landscape.
                </Typography>
                </Grid>

                <Grid
                item
                md={4}
                xs={12}
                alignSelf="center"
                sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center" }}
                >
                <img
                    src="/assets/images/about_page3.png"
                    alt="about"
                    width="380px"
                    height="400px"
                />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AboutPage;
