import React from "react";
import Box from "@mui/material/Box";
import styles from "./PlantCard.module.scss";
import { Chip, Typography, Button } from "@mui/material";
import { ImConnection } from "react-icons/im";
import { relativeFromUnix } from "../../utils/time";

export default function PlantCard({
  name,
  moisture,
  dryThreshold,
  lastUpdated,
}) {
  return (
    <Box className={styles.plantCard}>
      <Typography className={styles.name} variant="body2">
        {name}
      </Typography>
      <Typography className={styles.moisture} variant="body2">
        {Math.round(moisture * 100)}%
      </Typography>
      {moisture < dryThreshold ? (
        <Chip className={styles.chip} label="DRY" color="error" size="small" />
      ) : (
        <Chip
          className={styles.chip}
          label="WET"
          color="success"
          size="small"
        />
      )}
      <Box className={styles.footer}>
        <Box className={styles.updated}>
          <ImConnection className={styles.connection} />
          <Typography variant="body2">
            {relativeFromUnix(lastUpdated)}
          </Typography>
        </Box>
        <Button variant="outlined" size="small">
          Details
        </Button>
      </Box>
    </Box>
  );
}
