import React from "react";
import styles from "./Home.module.scss";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box className={styles.home}>
      <Typography variant="h4">Plant Watering System V1.0</Typography>
      <Box className={styles.buttons}>
        <Button className={styles.water} variant="contained">
          Water
        </Button>
        <Button className={styles.logs} variant="contained">
          Logs
        </Button>
        <Button className={styles.status} variant="contained" color="success">
          Status
        </Button>
      </Box>
    </Box>
  );
}
