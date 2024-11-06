import type { PipelineEdDSATicketZuAuthConfig } from "@pcd/passport-interface";

export type TicketTypeName = "MegaZu" | "Devcon";

export const watermark = "0";

export const whitelistedTickets: Record<
  TicketTypeName,
  PipelineEdDSATicketZuAuthConfig[]
> = {
  MegaZu: [
    {
      "pcdType": "eddsa-ticket-pcd",
      "publicKey": [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      "productId": "b6d0715e-27be-5bf2-8041-125cc8e89d07",
      "eventId": "70848dea-365b-5838-b36e-f691e3151cbd",
      "eventName": "MegaZu24",
      "productName": "Resident"
    },
    {
      "pcdType": "eddsa-ticket-pcd",
      "publicKey": [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      "productId": "7929010a-d31f-5355-a633-b2e8af4f36db",
      "eventId": "70848dea-365b-5838-b36e-f691e3151cbd",
      "eventName": "MegaZu24",
      "productName": "Core-Organizer"
    }
  ],
  Devcon: [
    {
      "pcdType": "eddsa-ticket-pcd",
      "publicKey": [
        "044e711fd3a1792a825aa896104da5276bbe710fd9b59dddea1aaf8d84535aaf",
        "2b259329f0adf98c9b6cf2a11db7225fdcaa4f8796c61864e86154477da10663"
      ],
      "eventId": "5074edf5-f079-4099-b036-22223c0c6995",
      "eventName": "Devcon: Southeast Asia"
    }
  ]
  
};

export const config = Object.entries(whitelistedTickets).flatMap(
  ([ticketType, tickets]) =>
    tickets
      .map((ticket) => {
        if (ticket.eventId && ticket.productId) {
          return {
            pcdType: ticket.pcdType,
            ticketType: ticketType as TicketTypeName,
            eventId: ticket.eventId,
            productId: ticket.productId,
            eventName: ticket.eventName || "",
            productName: ticket.productName || "",
            publicKey: ticket.publicKey
          };
        }
        return null;
      })
      .filter((ticket): ticket is NonNullable<typeof ticket> => ticket !== null)
); 