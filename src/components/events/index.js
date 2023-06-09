import { useAtom, useAtomValue, useSetAtom } from "jotai";
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
  HeartIcon,
  EditIcon,
  AddIcon,
  DeleteIcon,
} from "../icons";
import { StyledBadge } from "../badge";
import { promiseHandler } from "../../utils";
import {
  accessAtom,
  eventsAtom,
  eventAtom,
  refreshAtom,
  accountReducerAtom,
  registerEventVisibleAtom,
} from "../../states";
import { api } from "../../utils";

import { useEffect } from "react";

export const Events = () => {
  const account = useAtomValue(accountReducerAtom);
  const [access, setAccess] = useAtom(accessAtom);
  const [refresh, setRefresh] = useAtom(refreshAtom);
  const [events, setEvents] = useAtom(eventsAtom);
  const setEvent = useSetAtom(eventAtom)
  const [eventRegisterModal, setEventRegisterModal] = useAtom(
    registerEventVisibleAtom
  );

  useEffect(() => {
    const fetchEvents = async () => {
      const params = {
        path: "events",
        method: "GET",
        access: access,
        refresh: refresh,
      };
      const [fetchError, fetchData] = await promiseHandler(
        api(params)
      );
      if (fetchError) console.log(fetchError);
      console.log("fetchData: ", fetchData);
      const [error, data] = await promiseHandler(fetchData.json());
      if (error) console.log(error);
      console.log("data: ", data);
      setEvents(data);
    };
    fetchEvents();
  }, []);

  const handleSubscribe = async id => {
    const params = {
      path: `events/${id}/subscribe/`,
      method: "POST",
      access: access,
      refresh: refresh,
    };
    const [fetchError, fetchData] = await promiseHandler(
      api(params)
    );
    if (fetchError) console.log(fetchError);
    console.log("fetchData: ", fetchData);
    const [error, data] = await promiseHandler(fetchData.json());
    if (error) console.log(error);
    console.log("data: ", data);
    if (fetchError || fetchData.status >= 400)
      return alert(data.detail);
    const [
      fetchEventsError,
      fetchEventsData,
    ] = await promiseHandler(
      api({
        path: "events",
        method: "GET",
        access: access,
        refresh: refresh,
      })
    );
    if (fetchEventsError) console.log(fetchEventsError);
    console.log("fetchEventsData: ", fetchEventsData);
    const [eventsError, eventsData] = await promiseHandler(
      fetchEventsData.json()
    );
    if (eventsError) console.log(eventsError);
    console.log("eventsData: ", eventsData);
    setEvents(eventsData);
  };

  const handleUnsubscribe = async id => {
    const params = {
      path: `events/${id}/unsubscribe/`,
      method: "POST",
      access: access,
      refresh: refresh,
    };
    const [fetchError, fetchData] = await promiseHandler(
      api(params)
    );
    if (fetchError) console.log(fetchError);
    console.log("fetchData: ", fetchData);
    const [error, data] = await promiseHandler(fetchData.json());
    if (error) console.log(error);
    console.log("data: ", data);
    if (fetchError || fetchData.status >= 400)
      return alert(data.detail);
    const [
      fetchEventsError,
      fetchEventsData,
    ] = await promiseHandler(
      api({
        path: "events",
        method: "GET",
        access: access,
        refresh: refresh,
      })
    );
    if (fetchEventsError) console.log(fetchEventsError);
    console.log("fetchEventsData: ", fetchEventsData);
    const [eventsError, eventsData] = await promiseHandler(
      fetchEventsData.json()
    );
    if (eventsError) console.log(eventsError);
    console.log("eventsData: ", eventsData);
    setEvents(eventsData);
  };

  const handleDelete = async id => {
    const params = {
      path: `events/${id}/`,
      method: "DELETE",
      access: access,
      refresh: refresh,
    };
    const [fetchError, fetchData] = await promiseHandler(api(params));
    if (fetchError) console.log(fetchError);
    console.log("fetchData: ", fetchData);
    const [error, data] = await promiseHandler(fetchData.json());
    if (error) console.log(error);
    console.log("data: ", data);
    if (fetchError || fetchData.status >= 400)
      return alert(data.detail);
    const [
      fetchEventsError,
      fetchEventsData,
    ] = await promiseHandler(
      api({
        path: "events",
        method: "GET",
        access: access,
        refresh: refresh,
      })
    );
    if (fetchEventsError) console.log(fetchEventsError);
    console.log("fetchEventsData: ", fetchEventsData);
    const [eventsError, eventsData] = await promiseHandler(
      fetchEventsData.json()
    );
    if (eventsError) console.log(eventsError);
    console.log("eventsData: ", eventsData);
    setEvents(eventsData);
  };

  const columns = [
    { name: "ID", uid: "id" },
    { name: "NAME", uid: "name" },
    { name: "STARTS", uid: "start_date" },
    { name: "ENDS", uid: "end_date" },
    { name: "STATUS", uid: "status" },
    { name: "LOCATION", uid: "location" },
    { name: "CREATED BY", uid: "created_by" },
    { name: "ACTIONS", uid: "actions" },
  ];

  const renderCell = (event, columnKey) => {
    const cellValue = event[columnKey];
    switch (columnKey) {
      case "id":
        return <Text b>{cellValue}</Text>;
      case "name":
        return (
          <Row justify="center" align="center">
            <Text css={{ tt: "capitalize" }}>{cellValue}</Text>
          </Row>
        );

      case "description":
        return (
          <Row align="center">
            <Text css={{ tt: "capitalize" }}>{cellValue}</Text>
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
          <StyledBadge type={event.status}>
            {cellValue}
          </StyledBadge>
        );

      case "start_date":
        return (
          <Text>{dayjs(cellValue).format("DD/MM/YYYY")}</Text>
        );

      case "end_date":
        return (
          <Text>{dayjs(cellValue).format("DD/MM/YYYY")}</Text>
        );

      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="Subscribe">
                <IconButton
                  onClick={() => {
                    console.log("View event", event.id);
                    if (
                      _.includes(event.subscribers, account.id)
                    ) {
                      return handleUnsubscribe(event.id);
                    }
                    handleSubscribe(event.id);
                  }}>
                  {_.includes(event.subscribers, account.id) ? (
                    <HeartIcon size={20} fill="#f31260" filled />
                  ) : (
                    <HeartIcon size={20} fill="#979797" />
                  )}
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip content="Create event">
                <IconButton
                  onClick={() => {
                    console.log("Edit event", event.id);
                    setEventRegisterModal(true);
                  }}>
                  <AddIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip content="Edit event">
                <IconButton
                  onClick={() => {
                    console.log("Edit event", event.id);
                    if (event.created_by !== account.id) {
                      return alert(
                        "You are not allowed to edit this event"
                      );
                    }
                    setEventRegisterModal(true);
                    setEvent(event);
                  }}>
                  <EditIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip
                content="Delete event"
                color="error"
                onClick={() => {
                  console.log("Delete event", event.id);
                  if (event.created_by !== account.id) {
                    return alert(
                      "You are not allowed to delete this event"
                    );
                  }
                  handleDelete(event.id);
                }}>
                <IconButton >
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
            align={
              _.includes(["actions", "name"], column.uid)
                ? "center"
                : "start"
            }>
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
