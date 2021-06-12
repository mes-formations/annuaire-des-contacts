import { useState } from "react";
import contactApi from "../configs/contact.api";
import { HTTP_VERBS } from "../enums/methods";
interface IRequest {
  method: HTTP_VERBS;
  url: string;
  body: Object;
}
const useHttpRequest = ({ method, url, body }: IRequest) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<any>(false);
  const [error, setError] = useState<any>(null);
  const [status, setStatus] = useState<number | null>(null);
  const [statusText, setStatusText] = useState<string>("");

  const makeRequest = async (props = {}) => {
    try {
      setIsLoading(true);
      setStatusText("loading");
      const response = await contactApi[method]<any>(url, {
        ...props,
        ...body,
      }).then((res) => res);
      setIsLoading(false);
      setData(response.data);
      setStatus(response.status);
      setStatusText(response.statusText);
    } catch (error) {
      setIsLoading(false);
      setError(error.response.data);
      setStatus(error.response.status);
    }
  };

  return { data, isLoading, error, status, statusText, makeRequest };
};

export default useHttpRequest;
