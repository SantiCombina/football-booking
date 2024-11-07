import {z} from "zod";

export const ReservationSchema = z.object({
    date: z.date().optional(),
    time: z.string().optional(),
});

export type ReservationValues = z.infer<typeof ReservationSchema>;
