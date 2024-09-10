import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Heading, Flex, Card, Box } from "@radix-ui/themes";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const IssueDetailsLoading = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Flex className="gap-2" my="2">
        <Skeleton width="2rem" />
        <Skeleton width="5rem" />
      </Flex>
      <Skeleton count={3} />
    </Box>
  );
};

export default IssueDetailsLoading;
