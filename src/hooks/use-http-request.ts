import { useState } from "react";
import contactApi from "../configs/contact.api";
import { HTTP_VERBS } from "../enums/methods";
interface IRequest {
  method: HTTP_VERBS;
  url: string;
  body?: Object;
}
const useHttpRequest = ({ method, url, body = {} }: IRequest) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<any>(false);
  const [error, setError] = useState<any>(null);
  const [status, setStatus] = useState<number | null>(null);
  const [statusText, setStatusText] = useState<string>("");

  //Pistes d'amélioration
  //If delete on success...
  const makeRequest = async (id: string = "", options: any = {}) => {
    try {
      setIsLoading(true);
      setStatusText("loading");
      const response = await contactApi[method]<any>(`${url}${id}`, {
        ...options,
        ...body,
      }).then((res) => res);
      setIsLoading(false);
      setData(response.data);
      setStatus(response.status);
      setStatusText(response.statusText);
      //On va améliorer ça
      if (method === HTTP_VERBS.delete) {
        setData(data?.filter((d: any) => d.id !== id));
      }
    } catch (error) {
      setIsLoading(false);
      setError(error.response.data);
      setStatus(error.response.status);
    }
  };

  return { data, isLoading, error, status, statusText, makeRequest };
};

export default useHttpRequest;
