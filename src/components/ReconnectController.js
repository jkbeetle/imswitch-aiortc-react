import React, { useState, useEffect } from "react";
import {
  Paper,
  Tabs,
  Tab,
  Box,
  Typography,
  TextField,
  Button,
  Slider,
  Grid,
} from "@mui/material";
import { green, red } from "@mui/material/colors";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

const goToWebsite = () => {
  window.open('https://youseetoo.github.io', '_blank');
};

const ReconnectController = ({ hostIP, hostPort, WindowTitle }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const reconnect = () => {
    const url = `${hostIP}:${hostPort}/UC2ConfigController/reconnect`;

    fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Handle response data if needed
      })
      .catch((error) => console.error("Error:", error));
  };

  const btConnect = () => {
    const url = `${hostIP}:${hostPort}/UC2ConfigController/btpairing`;

    fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Handle response data if needed
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <Paper>
      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        aria-label="settings tabs"
      >
        <Tab label="Reconnect to UC2 board" />
      </Tabs>

      <TabPanel value={tabIndex} index={0}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Reconnect to UC2 board</Typography>
            <div>
              <Button
                style={{ marginBottom: "20px" }}
                variant="contained"
                onClick={reconnect}
              >
                Reconnect
              </Button>
            </div>
            <Typography variant="h6">Bluetooth Pairing</Typography>
            <div>
              <Button
                style={{ marginBottom: "20px" }}
                variant="contained"
                onClick={btConnect}
              >
                BT Pairing
              </Button>
            </div>
            <Typography variant="h6">Flash New Firmware</Typography>
            <div>
              <Button
                style={{ marginBottom: "20px" }}
                variant="contained"
                onClick={goToWebsite}
              >
                UC2-ESP32
              </Button>
            </div>
          </Grid>
        </Grid>
      </TabPanel>
    </Paper>
  );
};

export default ReconnectController;
