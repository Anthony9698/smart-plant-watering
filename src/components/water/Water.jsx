import React from "react";
import styles from "./Water.module.scss";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { IoReturnDownBack } from "react-icons/io5";

export default function Water() {
  return (
    <Box className={styles.water}>
      <Box className={styles.buttons}>
        <Button className={styles.title} variant="contained">
          Water
        </Button>
        <Button className={styles.back} variant="contained">
          <IoReturnDownBack />
        </Button>
      </Box>
      <Box className={styles.main}>
        <Button variant="contained" color="warning">
          Primary
        </Button>
        <Button variant="contained" color="warning">
          Office
        </Button>
        <Button variant="contained" color="warning">
          Living Room
        </Button>
        <Button variant="contained" color="warning">
          Garage
        </Button>
      </Box>
    </Box>
  );
}
