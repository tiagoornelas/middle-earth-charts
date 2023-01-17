import useHeatmap from "../../hooks/useHeatmap";
import { series } from "./mock";

const BreakfastEatenByHobbitHeatmap = () => {
  const { ChartComponent } = useHeatmap(
    "🍞 Breakfasts a day eaten by hobbit", series, "1024px", "224px"
  );

  return <ChartComponent/>;
};

export default BreakfastEatenByHobbitHeatmap;
