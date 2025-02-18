import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { Session } from "next-auth";

export type IRefetch = (options?: RefetchOptions) => Promise<
  QueryObserverResult<
    | (Session & {
        error?: string;
      } & { accessToken?: string })
    | null,
    Error
  >
>;
