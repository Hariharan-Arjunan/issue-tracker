import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import IssueActions from "./IssueActions";
import { Table } from "@radix-ui/themes";

const IssueLoadingPage = () => {
  const issues = [1, 2, 3, 4, 5];
  return (
    <div>
      <IssueActions />
      <div>
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="">
                Status
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="">
                Created At
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {issues.map((issue) => {
              return (
                <Table.Row key={issue}>
                  <Table.Cell>
                    <Skeleton />
                  </Table.Cell>
                  <Table.Cell className="">
                    <Skeleton />
                  </Table.Cell>
                  {/* hidden md:visible */}
                  <Table.Cell className="">
                    <Skeleton />
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  );
};

export default IssueLoadingPage;
