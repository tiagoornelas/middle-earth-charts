import { Flex } from "@chakra-ui/react";
import React from "react";
import BreakfastEatenByHobbitHeatmap
  from "../../charts/BreakfastEatenByHobbitHeatmap";
import CharactersByYearChart
  from "../../charts/CharactersByYearChart/CharactersByYearChart";
import HobbitsNetWorthChart
  from "../../charts/HobbitsNetWorthChart/HobbitsNetWorthChart";
import PopulationByRaceChart from "../../charts/PopulationByRaceChart";
import RingUsesChart from "../../charts/RingUsesChart";

const Dashboard = () => {
  return <Flex direction={"column"} m={12} alignItems={"center"} gap={4}>
    <Flex gap={20}>
      <PopulationByRaceChart/>
      <RingUsesChart/>
    </Flex>
    <Flex gap={20}>
      <CharactersByYearChart/>
      <HobbitsNetWorthChart/>
    </Flex>
    <Flex gap={20}>
      <BreakfastEatenByHobbitHeatmap/>
    </Flex>
  </Flex>;
};

export default Dashboard;
