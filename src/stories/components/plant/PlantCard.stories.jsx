import PlantCard from "../../../components/plant/PlantCard";

export default {
  component: PlantCard,
};

export const Base = {
  args: {
    name: "Snake Plant",
    moisture: 0.83332,
    dryThreshold: 0.342,
    lastUpdated: 1756045791,
  },
};

export const Dry = {
  args: {
    name: "Fiddle Leaf Fig",
    moisture: 0.1234,
    dryThreshold: 0.342,
    lastUpdated: 1756045791,
  },
};
