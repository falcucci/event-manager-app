import { StyledBadge } from "../badge";
import {
  Table,
  Row,
  Col,
  Tooltip,
  User,
  Text,
} from "@nextui-org/react";
import {
  IconButton,
  EyeIcon,
  EditIcon,
  DeleteIcon,
} from "../icons";

export const Events = () => {
  const columns = [
    { name: "NAME", uid: "name" },
    { name: "ROLE", uid: "role" },
    { name: "STATUS", uid: "status" },
    { name: "ACTIONS", uid: "actions" },
  ];

  const users = [
    {
      id: 1,
      name: "Tony Reichert",
      role: "CEO",
      team: "Management",
      status: "active",
      age: "29",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      email: "tony.reichert@example.com",
    },
    {
      id: 2,
      name: "Zoey Lang",
      role: "Technical Lead",
      team: "Development",
      status: "paused",
      age: "25",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      email: "zoey.lang@example.com",
    },
    {
      id: 3,
      name: "Jane Fisher",
      role: "Senior Developer",
      team: "Development",
      status: "active",
      age: "22",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      email: "jane.fisher@example.com",
    },
    {
      id: 4,
      name: "William Howard",
      role: "Community Manager",
      team: "Marketing",
      status: "vacation",
      age: "28",
      avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
      email: "william.howard@example.com",
    },
    {
      id: 5,
      name: "Kristen Copper",
      role: "Sales Manager",
      team: "Sales",
      status: "active",
      age: "24",
      avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
      email: "kristen.cooper@example.com",
    },
    {
      id: 6,
      name: "John Smith",
      role: "Account Manager",
      team: "Accounting",
      status: "active",
      age: "27",
      avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700e",
      email: "john.smith@example.com",
    },
    {
      id: 7,
      name: "Jane Doe",
      role: "Marketing Manager",
      team: "Marketing",
      status: "active",
      age: "30",
      avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700f",
      email: "jane.doe@example.com",
    },
    {
      id: 8,
      name: "James Johnson",
      role: "Product Manager",
      team: "Product",
      status: "active",
      age: "32",
      avatar: "https://i.pravatar.cc/150?u=a092581d4ef90267010",
      email: "james.johnson@example.com",
    },
    {
      id: 9,
      name: "Emily Williams",
      role: "Software Engineer",
      team: "Engineering",
      status: "active",
      age: "25",
      avatar: "https://i.pravatar.cc/150?u=a092581d4ef90267011",
      email: "emily.williams@example.com",
    },
    {
      id: 10,
      name: "David Miller",
      role: "Data Analyst",
      team: "Analytics",
      status: "active",
      age: "28",
      avatar: "https://i.pravatar.cc/150?u=a092581d4ef90267012",
      email: "david.miller@example.com",
    },
    {
      id: 11,
      name: "Olivia Brown",
      role: "Graphic Designer",
      team: "Design",
      status: "active",
      age: "22",
      avatar: "https://i.pravatar.cc/150?u=a092581d4ef90267013",
      email: "olivia.brown@example.com",
    },
    {
      id: 12,
      name: "Charles Davis",
      role: "Project Manager",
      team: "Projects",
      status: "active",
      age: "35",
      avatar: "https://i.pravatar.cc/150?u=a092581d4ef90267014",
      email: "charles.davis@example.com",
    },
    {
      id: 13,
      name: "Samantha Moore",
      role: "Content Writer",
      team: "Content",
      status: "active",
      age: "26",
      avatar: "https://i.pravatar.cc/150?u=a092581d4ef90267015",
      email: "samantha.moore@example.com",
    },
    {
      id: 14,
      name: "Joseph Taylor",
      role: "Customer Service Rep",
      team: "Customer Service",
      status: "active",
      age: "31",
      avatar: "https://i.pravatar.cc/150?u=a092581d4ef90267016",
      email: "joseph.taylor@example.com",
    },
    {
      id: 15,
      name: "Emily Anderson",
      role: "Software Developer",
      team: "Development",
      status: "active",
      age: "29",
      avatar: "https://i.pravatar.cc/150?u=a092581d4ef90267017",
      email: "emily.anderson@example.com",
    },
  ];
  const renderCell = (user, columnKey) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "name":
        return (
          <User
            squared
            src={user.avatar}
            name={cellValue}
            css={{ p: 0 }}>
            {user.email}
          </User>
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
                {user.team}
              </Text>
            </Row>
          </Col>
        );
      case "status":
        return (
          <StyledBadge type={user.status}>{cellValue}</StyledBadge>
        );

      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="Details">
                <IconButton
                  onClick={() =>
                    console.log("View user", user.id)
                  }>
                  <EyeIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip content="Edit user">
                <IconButton
                  onClick={() =>
                    console.log("Edit user", user.id)
                  }>
                  <EditIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip
                content="Delete user"
                color="error"
                onClick={() =>
                  console.log("Delete user", user.id)
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
            align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </Table.Column>
        )}
      </Table.Header>
      <Table.Body items={users}>
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
