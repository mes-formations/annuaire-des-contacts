import { RouteComponentProps } from "react-router-dom";

interface ContactIdParam {
  id: string;
}

export type ContactDetailsRouterProps = RouteComponentProps<ContactIdParam>;
