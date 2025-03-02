-- CreateTable
CREATE TABLE "ticket" (
    "ticket_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "showtime_id" INTEGER NOT NULL,
    "seat_id" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "purchase_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ticket_pkey" PRIMARY KEY ("ticket_id")
);

-- AddForeignKey
ALTER TABLE "ticket" ADD CONSTRAINT "ticket_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket" ADD CONSTRAINT "ticket_showtime_id_fkey" FOREIGN KEY ("showtime_id") REFERENCES "showtime"("showtime_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket" ADD CONSTRAINT "ticket_seat_id_fkey" FOREIGN KEY ("seat_id") REFERENCES "seat"("seat_id") ON DELETE CASCADE ON UPDATE CASCADE;
