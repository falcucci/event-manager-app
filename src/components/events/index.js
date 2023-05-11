import { StyledBadge } from "../badge";
import _ from "lodash";
import dayjs from "dayjs";
import {
  Table,
  Row,
  Col,
  Tooltip,
  event,
  Text,
} from "@nextui-org/react";
import {
  IconButton,
  EyeIcon,
  EditIcon,
  DeleteIcon,
} from "../icons";

import { useEffect } from "react";

export const Events = () => {

  useEffect(() => {}, []);


  const columns = [
    { name : "ID", uid: "id" },
    { name : "NAME", uid: "name" },
    { name : "DESCRIPTION", uid: "description" },
    { name : "STARTS", uid: "start_date" },
    { name : "ENDS", uid: "end_date" },
    { name : "STATUS", uid: "status" },
    { name : "LOCATION", uid: "location" },
    { name : "CREATED BY", uid: "created_by" },
    { name: "ACTIONS", uid: "actions" },
  ];

  const events = [
    {
      id: 1,
      name: "Event 1",
      description: "This is the first event",
      status: "active",
      start_date: "2024-01-01T00:00:00Z",
      end_date: "2024-01-02T00:00:00Z",
      location: "New York",
      is_public: true,
      created_at: "2024-01-01T00:00:00Z",
      updated_at: "2024-01-01T00:00:00Z",
      created_by: 1,
      subscribers: [1, 2, 3],
    },
    {
      id: 2,
      name: "Event 2",
      description: "This is the second event",
      status: "active",
      start_date: "2024-02-01T00:00:00Z",
      end_date: "2024-02-02T00:00:00Z",
      location: "Los Angeles",
      is_public: true,
      created_at: "2024-02-01T00:00:00Z",
      updated_at: "2024-02-01T00:00:00Z",
      created_by: 2,
      subscribers: [1, 2, 3],
    },
    {
      id: 3,
      name: "Event 3",
      description: "This is the third event",
      status: "active",
      start_date: "2024-03-01T00:00:00Z",
      end_date: "2024-03-02T00:00:00Z",
      location: "Chicago",
      is_public: true,
      created_at: "2024-03-01T00:00:00Z",
      updated_at: "2024-03-01T00:00:00Z",
      created_by: 3,
      subscribers: [1, 2, 3],
    },
    {
      id: 4,
      name: "Event 4",
      description: "This is the fourth event",
      status: "active",
      start_date: "2024-04-01T00:00:00Z",
      end_date: "2024-04-02T00:00:00Z",
      location: "Houston",
      is_public: true,
      created_at: "2024-04-01T00:00:00Z",
      updated_at: "2024-04-01T00:00:00Z",
      created_by: 1,
      subscribers: [1, 2, 3],
    },
    {
      id: 5,
      name: "Event 5",
      description: "This is the fifth event",
      status: "active",
      start_date: "2024-05-01T00:00:00Z",
      end_date: "2024-05-02T00:00:00Z",
      location: "Philadelphia",
      is_public: true,
      created_at: "2024-05-01T00:00:00Z",
      updated_at: "2024-05-01T00:00:00Z",
      created_by: 1,
      subscribers: [1, 2, 3],
    },
    {
      id: 6,
      name: "Event 6",
      description: "This is the sixth event",
      status: "active",
      start_date: "2024-06-01T00:00:00Z",
      end_date: "2024-06-02T00:00:00Z",
      location: "San Francisco",
      is_public: true,
      created_at: "2024-06-01T00:00:00Z",
      updated_at: "2024-06-01T00:00:00Z",
      created_by: 1,
      subscribers: [1, 2, 3],
    },
    {
      id: 7,
      name: "Event 7",
      description: "This is the seventh event",
      status: "active",
      start_date: "2024-07-01T00:00:00Z",
      end_date: "2024-07-02T00:00:00Z",
      location: "Boston",
      is_public: true,
      created_at: "2024-07-01T00:00:00Z",
      updated_at: "2024-07-01T00:00:00Z",
      created_by: 1,
      subscribers: [1, 2, 3],
    },
    {
      id: 8,
      name: "My Event",
      description: "This is my event",
      status: "active",
      start_date: "2020-01-01T00:00:00Z",
      end_date: "2020-01-02T00:00:00Z",
      location: "My Location",
      is_public: true,
      created_at: "2023-05-10T17:44:49.337693Z",
      updated_at: "2023-05-10T17:44:49.337708Z",
      created_by: 2,
      subscribers: [1, 2, 3],
    },
    {
      id: 9,
      name: "My Event",
      description: "This is my event",
      status: "active",
      start_date: "2020-01-01T00:00:00Z",
      end_date: "2020-01-02T00:00:00Z",
      location: "Milan",
      is_public: true,
      created_at: "2023-05-10T17:44:56.523062Z",
      updated_at: "2023-05-10T17:44:56.523078Z",
      created_by: 2,
      subscribers: [1, 2, 3],
    },
    {
      id: 10,
      name: "My Event",
      description: "This is my event",
      status: "active",
      start_date: "2020-01-01T00:00:00Z",
      end_date: "2020-01-02T00:00:00Z",
      location: "Milan",
      is_public: true,
      created_at: "2023-05-10T17:44:58.373328Z",
      updated_at: "2023-05-10T17:44:58.373342Z",
      created_by: 2,
      subscribers: [1, 2, 3],
    },
    {
      id: 11,
      name: "My Event",
      description: "This is my event",
      status: "active",
      start_date: "2020-01-01T00:00:00Z",
      end_date: "2020-01-02T00:00:00Z",
      location: "Milan",
      is_public: true,
      created_at: "2023-05-10T17:45:04.119360Z",
      updated_at: "2023-05-10T17:45:04.119373Z",
      created_by: 2,
      subscribers: [1, 2, 3],
    },
    {
      id: 12,
      name: "Rust Meetup",
      description: "This is my event",
      status: "active",
      start_date: "2020-01-01T00:00:00Z",
      end_date: "2020-01-02T00:00:00Z",
      location: "Milan",
      is_public: true,
      created_at: "2023-05-10T17:45:22.795223Z",
      updated_at: "2023-05-10T17:45:22.795238Z",
      created_by: 2,
      subscribers: [1, 2, 3],
    },
    {
      id: 13,
      name: "Rust Meetup",
      description: "This is my event",
      status: "active",
      start_date: "2020-01-01T00:00:00Z",
      end_date: "2020-01-02T00:00:00Z",
      location: "Milan",
      is_public: true,
      created_at: "2023-05-10T17:46:28.385105Z",
      updated_at: "2023-05-10T17:46:28.385118Z",
      created_by: 2,
      subscribers: [1, 2, 3],
    },
    {
      id: 14,
      name: "Rust Meetup2",
      description: "This is my event",
      status: "active",
      start_date: "2020-01-01T00:00:00Z",
      end_date: "2020-01-02T00:00:00Z",
      location: "Milan",
      is_public: true,
      created_at: "2023-05-10T17:46:30.222192Z",
      updated_at: "2023-05-10T17:54:13.651331Z",
      created_by: 2,
      subscribers: [1, 2, 3],
    },
    {
      id: 16,
      name: "Rust Meetup",
      description: "This is my event",
      status: "active",
      start_date: "2020-01-01T00:00:00Z",
      end_date: "2020-01-02T00:00:00Z",
      location: "Milan",
      is_public: true,
      created_at: "2023-05-10T20:19:45.785097Z",
      updated_at: "2023-05-10T20:19:45.785110Z",
      created_by: 2,
      subscribers: [1, 3],
    },
    {
      id: 17,
      name: "Rust Meetup not aurora",
      description: "This is my event",
      status: "active",
      start_date: "2020-01-01T00:00:00Z",
      end_date: "2020-01-02T00:00:00Z",
      location: "Milan",
      is_public: true,
      created_at: "2023-05-10T20:19:51.311458Z",
      updated_at: "2023-05-10T20:19:51.311471Z",
      created_by: 2,
      subscribers: [1, 2, 3],
    },
    {
      id: 18,
      name: "Rust Meetup not aurora",
      description: "This is my event",
      status: "active",
      start_date: "2020-01-01T00:00:00Z",
      end_date: "2020-01-02T00:00:00Z",
      location: "Milan",
      is_public: true,
      created_at: "2023-05-10T20:41:10.988080Z",
      updated_at: "2023-05-10T20:41:10.988093Z",
      created_by: 2,
      subscribers: [1, 3],
    },
    {
      id: 19,
      name: "Rust Meetup not aurora",
      description: "This is my event",
      status: "active",
      start_date: "2024-01-01T00:00:00Z",
      end_date: "2024-01-02T00:00:00Z",
      location: "Milan",
      is_public: true,
      created_at: "2023-05-10T20:41:28.376963Z",
      updated_at: "2023-05-10T20:41:28.376976Z",
      created_by: 2,
      subscribers: [1, 3],
    },
  ];

  const renderCell = (event, columnKey) => {
    const cellValue = event[columnKey];
    switch (columnKey) {
      case "name":
        return (
          <Row justify="center" align="center">
             <Text b size={14} css={{ tt: "capitalize" }}> 
              {cellValue} 
            </Text>
          </Row>
        );
      case "role":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {cellValue}
              </Text>
            </Row>
            <Row>
              <Text
                b
                size={13}
                css={{ tt: "capitalize", color: "$accents7" }}>
                {event.team}
              </Text>
            </Row>
          </Col>
        );
      case "status":
        return (
          <StyledBadge type={event.status}>{cellValue}</StyledBadge>
        );

      case "start_date":
        return (
          <Text>
          {dayjs(cellValue).format("DD/MM/YYYY")}
          </Text>
        );

      case "end_date":

        return (
          <Text>
          {dayjs(cellValue).format("DD/MM/YYYY")}
          </Text>
        );


      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="Details">
                <IconButton
                  onClick={() =>
                    console.log("View event", event.id)
                  }>
                  <EyeIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip content="Edit event">
                <IconButton
                  onClick={() =>
                    console.log("Edit event", event.id)
                  }>
                  <EditIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip
                content="Delete event"
                color="error"
                onClick={() =>
                  console.log("Delete event", event.id)
                }>
                <IconButton>
                  <DeleteIcon size={20} fill="#FF0080" />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };
  return (
    <Table
      aria-label="Example table with custom cells"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
      selectionMode="none">
      <Table.Header columns={columns}>
        {column => (
          <Table.Column
            key={column.uid}
            hideHeader={column.uid === "actions"}
            align={_.includes(["actions", "name"], column.uid) ? "center" : "start"}>
            {column.name}
          </Table.Column>
        )}
      </Table.Header>
      <Table.Body items={events}>
        {item => (
          <Table.Row>
            {columnKey => (
              <Table.Cell>
                {renderCell(item, columnKey)}
              </Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
};
