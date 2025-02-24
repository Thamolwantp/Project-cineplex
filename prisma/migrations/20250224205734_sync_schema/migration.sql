-- CreateEnum
CREATE TYPE "seat_status" AS ENUM ('Available', 'Reserved', 'Occupied');

-- CreateTable
CREATE TABLE "cinema" (
    "cinema_id" SERIAL NOT NULL,
    "name_cinema" VARCHAR(100) NOT NULL,
    "location" VARCHAR(255),

    CONSTRAINT "cinemas_pkey" PRIMARY KEY ("cinema_id")
);

-- CreateTable
CREATE TABLE "movie" (
    "addmoive_id" SERIAL NOT NULL,
    "tag" TEXT,
    "title" TEXT,
    "category" TEXT,
    "time" INTEGER,
    "language" TEXT,
    "cinema" TEXT,
    "fdate" TIMESTAMP(6),
    "actor" TEXT,
    "director" TEXT,
    "resume" TEXT,
    "image_url" TEXT,
    "ldate" TIMESTAMP(6),
    "timer1" TIME(6),
    "timer2" TIME(6),
    "timer3" TIME(6),

    CONSTRAINT "addmoive_pkey" PRIMARY KEY ("addmoive_id")
);

-- CreateTable
CREATE TABLE "seat" (
    "seat_id" SERIAL NOT NULL,
    "cinema_id" INTEGER NOT NULL,
    "seat_number" INTEGER NOT NULL,
    "price" INTEGER,

    CONSTRAINT "seats_pkey" PRIMARY KEY ("seat_id")
);

-- CreateTable
CREATE TABLE "seat_reservation" (
    "reservation_id" SERIAL NOT NULL,
    "showtime_id" INTEGER NOT NULL,
    "seat_id" INTEGER NOT NULL,
    "status" "seat_status" DEFAULT 'Available',
    "reserved_by" VARCHAR(255),
    "reserved_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "seat_reservations_pkey" PRIMARY KEY ("reservation_id")
);

-- CreateTable
CREATE TABLE "showtime" (
    "showtime_id" SERIAL NOT NULL,
    "cinema_id" INTEGER NOT NULL,
    "addmoive_id" INTEGER NOT NULL,
    "start_time" TIMESTAMP(6),
    "end_time" TIMESTAMP(6),

    CONSTRAINT "showtimes_pkey" PRIMARY KEY ("showtime_id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "user" TEXT,
    "email" TEXT,
    "password" TEXT,

    CONSTRAINT "username_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "seat_reservation" ADD CONSTRAINT "seat_reservations_seat_id_fkey" FOREIGN KEY ("seat_id") REFERENCES "seat"("seat_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "seat_reservation" ADD CONSTRAINT "seat_reservations_showtime_id_fkey" FOREIGN KEY ("showtime_id") REFERENCES "showtime"("showtime_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "showtime" ADD CONSTRAINT "showtimes_addmoive_id_fkey" FOREIGN KEY ("addmoive_id") REFERENCES "movie"("addmoive_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
