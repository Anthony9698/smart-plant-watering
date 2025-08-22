import React from "react";
import styles from "./Plant.module.scss";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { IoReturnDownBack } from "react-icons/io5";

export default function Plant({ name, room }) {
  return (
    <Box className={styles.plant}>
      <Box className={styles.buttons}>
        <Box className={styles.title}>
          <Button variant="contained">Water</Button>
          <Button variant="contained" color="warning">
            {room}
          </Button>
          <Button variant="contained" color="success">
            {name}
          </Button>
        </Box>
        <Button className={styles.back} variant="contained">
          <IoReturnDownBack />
        </Button>
      </Box>
      <Box className={styles.main}>
        <Button variant="contained">Water (hold)</Button>
        <Button variant="contained">Water until moist</Button>
      </Box>
    </Box>
  );
}
