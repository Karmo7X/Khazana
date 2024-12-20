import React,{useState} from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Mylibrary from "../../components/Usersections/Mylibrary";
import RegisterBook from "../../components/Usersections/RegisterBook";
import RegisterAuthor from "../../components/Usersections/RegisterAuthor";
import Profile_sec from "../../components/Usersections/profile_sec";
import Changepass from "../../components/Usersections/Changepass";
import Address from "../../components/Usersections/Address";

const Profile = () => {
  const { t, i18n } = useTranslation();
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{minHeight:'100vh'}}>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              sx={{
                "& .MuiTab-root": {
                  color: "#000", // Tab text color (inactive)
                },
                "& .MuiTab-root.Mui-selected": {
                  color: "#FFC900", // Active tab text color
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "#FFC900", // Indicator color
                },
              }}
              onChange={handleChange}
              aria-label="lab API tabs example"
              variant="scrollable"
              scrollButtons={false}
            
            >
              <Tab label={t("global.profile.account_settings")} value="1" />
              <Tab label={t("global.profile.book_request")} value="2" />
              <Tab label={t("global.profile.author_registration")} value="3" />
              <Tab label={t("global.profile.my_library")} value="4"/>
              <Tab label={t("global.profile.address.title")} value="5"/>
              <Tab label={t("global.profile.changePassword")} value="6"/>
            </TabList>
          </Box>
          <TabPanel value="1">
           <Profile_sec/>
          </TabPanel>
          <TabPanel value="2"><RegisterBook/></TabPanel>
          <TabPanel value="3"><RegisterAuthor/></TabPanel>
          <TabPanel value="4">
            <Mylibrary/>
          </TabPanel>
          <TabPanel value="5">
           <Address/>
          </TabPanel>
          <TabPanel value="6">
            <Changepass/>
          </TabPanel>
        </TabContext>
      </Box>

      {/* for author */}
      {/* <Dashboard/> */}
    </div>
  );
};

export default Profile;
