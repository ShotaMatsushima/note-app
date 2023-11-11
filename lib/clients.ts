import { Note } from "@/app/notes/types";
import { MicroCMSQueries, createClient } from "microcms-js-sdk"; //ES6

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN!,
  apiKey: process.env.NEXT_PUBLIC_API_KEY!,
});

export const getNoteLists = async () => {
  const noteLists = await client.getList<Note>({
    endpoint: "notes",
  });
  return noteLists;
};

export const getDetailNote = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailNote = await client.getListDetail<Note>({
    endpoint: "notes",
    contentId,
    queries,
  });
  return detailNote;
};
