import { CloudEvent } from "@google-cloud/functions-framework";

export const index = (event: CloudEvent<{message: string;}>) => {
  const message = event.data?.message;
  console.log(message);
}
