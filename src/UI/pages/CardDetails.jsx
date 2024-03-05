import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import "../styles/Dash.css";

import InfoIcon from "@mui/icons-material/Info";
import DescriptionIcon from "@mui/icons-material/Description";
import HouseIcon from "@mui/icons-material/House";
import MailIcon from "@mui/icons-material/Mail";
import BusinessIcon from "@mui/icons-material/Business";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { useTheme } from "../providers/ThemeProvider";

const CardDetails = ({ card }) => {
  const { isDark } = useTheme();

  return (
    <Box minHeight={100}>
      <Grid container>
        <Grid item xs={12}>
          <Stack spacing={2} sx={{ minWidth: "100%" }}>
            <Card
              sx={{
                minWidth: "49%",
                height: "auto",
                backgroundColor: isDark ? "#1A3628" : "#e9cabb",
              }}
            >
              <CardContent className="contentStyle">
                <div className="iconStyle">
                  <InfoIcon />{" "}
                </div>
                <Box>
                  <Typography gutterBottom variant="h5" component="div">
                    BUSINESS DETAILS
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div">
                    Here you can find all the information about the business you
                    are looking for.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>

      {/* ========================================================== */}
      <Box height={20} />
      <Grid sx={{ minWidth: "100%", height: "auto", m: 0 }}>
        <Grid
          item
          xs={12}
          sx={{
            height: "auto",
            backgroundColor: isDark ? "#1A3628" : "#e9cabb",
          }}
          className="gradiendLight"
        >
          <Stack
            direction="row"
            sx={{
              minWidth: "100%",
              paddingBottom: "16px",
              paddingRight: "16px",
              display: "flex",
              justifyContent: "space-between",
              gap: { xs: "0", sm: "5px" },
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Card
              sx={{
                minWidth: "49%",
                backgroundColor: isDark ? "#1A3628" : "white",
              }}
            >
              <CardContent
                sx={{
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                <BusinessIcon color="primary" sx={{ fontSize: 40 }} />

                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Company Name: {card?.title}
                </Typography>
              </CardContent>
            </Card>
            <Box height={20} />

            <Card
              sx={{
                minWidth: "49%",
                backgroundColor: isDark ? "#1A3628" : "white",
              }}
            >
              <CardContent
                sx={{
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                <HouseIcon color="primary" sx={{ fontSize: 40 }} />

                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Address:{" "}
                  {`${card?.address.houseNumber}, ${card?.address.street}, ${card?.address.city}`}
                </Typography>
              </CardContent>
            </Card>
          </Stack>
          {/* ========================================================== */}

          <Stack
            direction="row"
            sx={{
              minWidth: "100%",
              paddingBottom: "16px",
              paddingRight: "16px",
              display: "flex",
              justifyContent: "space-between",
              gap: { xs: "0", sm: "5px" },
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Card
              sx={{
                minWidth: "32%",
                backgroundColor: isDark ? "#1A3628" : "white",
              }}
            >
              <CardContent
                sx={{
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                <AddIcCallIcon color="primary" sx={{ fontSize: 40 }} />

                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Phone: {card?.phone}
                </Typography>
              </CardContent>
            </Card>
            <Box height={20} />

            <Card
              sx={{
                minWidth: "32%",
                backgroundColor: isDark ? "#1A3628" : "white",
              }}
            >
              <CardContent
                sx={{
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                <MailIcon color="primary" sx={{ fontSize: 40 }} />

                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Postal Code: {card?.address.zip}
                </Typography>
              </CardContent>
            </Card>
            <Box height={20} />

            <Card
              sx={{
                minWidth: "32%",
                backgroundColor: isDark ? "#1A3628" : "white",
              }}
            >
              <CardContent
                sx={{
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                <AlternateEmailIcon color="primary" sx={{ fontSize: 40 }} />

                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Email: {card?.email}
                </Typography>
              </CardContent>
            </Card>
          </Stack>

          <Stack
            direction="row"
            sx={{
              minWidth: "100%",
              paddingBottom: "16px",
              paddingRight: "16px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Card
              sx={{
                minWidth: "100%",
                backgroundColor: isDark ? "#1A3628" : "white",
              }}
            >
              <CardContent
                sx={{
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                <DescriptionIcon color="primary" sx={{ fontSize: 40 }} />

                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Description: {card?.description}
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardDetails;
