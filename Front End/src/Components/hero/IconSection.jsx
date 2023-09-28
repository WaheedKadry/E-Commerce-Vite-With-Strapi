import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
const IconSection = () => {
  let theme = useTheme();
  return (
    <Container
      sx={{ mt: 3, bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff" }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        divider={
          useMediaQuery("(min-width: 600px)") && (
            <Divider orientation="vertical" flexItem />
          )
        }
        flexWrap={"wrap"}
      >
        <MyBox
          icon={<ElectricBoltIcon fontSize="large" />}
          title={"Fast Delivery"}
          subTitle={"Start from $10"}
        />
        <MyBox
          icon={<CreditScoreIcon fontSize="large" />}
          title={"Money Guarantee"}
          subTitle={"7 Days Back"}
        />
        <MyBox
          icon={<WorkspacePremiumIcon fontSize="large" />}
          title={"365 Days"}
          subTitle={"For free return"}
        />
        <MyBox
          icon={<AccessAlarmIcon fontSize="large" />}
          title={"Payment"}
          subTitle={"Secure system"}
        />
      </Stack>
    </Container>
  );
};
export default IconSection;
const MyBox = ({ icon, title, subTitle }) => {
  let theme = useTheme();
  return (
    <Box
      sx={{
        width: {
          xs: "calc(96% / 1)",
          sm: "calc(96% / 2)",
          md: "calc(96% / 3)",
          lg: "calc(96% / 4)",
        },
        // [theme.breakpoints.down("lg")]: {
        //   width: "calc(96% / 3)",
        // },
        display: "flex",
        gap: 2,
        alignItems: "center",
        p: 1.6,
        justifyContent: { sm: "center" },
        flexWrap: "wrap",
      }}
    >
      {icon}
      <Box>
        <Typography variant="body1" sx={{ my: 1 }}>
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 300,
            color: theme.palette.text.secondary,
          }}
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};
