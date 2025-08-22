import React from "react";
import styles from "./Room.module.scss";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { IoReturnDownBack } from "react-icons/io5";

export default function Room({ room, plants }) {
  return (
    <Box className={styles.room}>
      <Box className={styles.buttons}>
        <Box className={styles.title}>
          <Button variant="contained">Water</Button>
          <Button variant="contained" color="warning">
            {room}
          </Button>
        </Box>
        <Button className={styles.back} variant="contained">
          <IoReturnDownBack />
        </Button>
      </Box>
      <Box className={styles.main}>
        {plants?.map((plant) => (
          <Button key={plant} variant="contained" color="success">
            {plant}
          </Button>
        ))}
      </Box>
    </Box>
  );
}
