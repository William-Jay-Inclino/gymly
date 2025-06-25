-- CreateTable
CREATE TABLE "site_visits" (
    "id" TEXT NOT NULL,
    "user_id" TEXT,
    "session_id" TEXT NOT NULL,
    "ip_address" TEXT NOT NULL,
    "user_agent" TEXT NOT NULL,
    "referer" TEXT,
    "page_url" TEXT NOT NULL,
    "country" TEXT,
    "region" TEXT,
    "city" TEXT,
    "device_type" TEXT,
    "browser" TEXT,
    "os" TEXT,
    "is_bot" BOOLEAN NOT NULL DEFAULT false,
    "is_unique" BOOLEAN NOT NULL DEFAULT false,
    "visit_duration" INTEGER,
    "page_views" INTEGER NOT NULL DEFAULT 1,
    "visited_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "site_visits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "daily_visit_stats" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMPTZ NOT NULL,
    "total_visits" INTEGER NOT NULL DEFAULT 0,
    "unique_visits" INTEGER NOT NULL DEFAULT 0,
    "page_views" INTEGER NOT NULL DEFAULT 0,
    "bounce_rate" DECIMAL(5,2),
    "avg_session_time" INTEGER,
    "top_page" TEXT,
    "top_referer" TEXT,
    "mobile_visits" INTEGER NOT NULL DEFAULT 0,
    "desktop_visits" INTEGER NOT NULL DEFAULT 0,
    "tablet_visits" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "daily_visit_stats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "site_visits_visited_at_idx" ON "site_visits"("visited_at");

-- CreateIndex
CREATE INDEX "site_visits_ip_address_visited_at_idx" ON "site_visits"("ip_address", "visited_at");

-- CreateIndex
CREATE INDEX "site_visits_session_id_idx" ON "site_visits"("session_id");

-- CreateIndex
CREATE INDEX "site_visits_is_unique_visited_at_idx" ON "site_visits"("is_unique", "visited_at");

-- CreateIndex
CREATE INDEX "daily_visit_stats_date_idx" ON "daily_visit_stats"("date");

-- CreateIndex
CREATE UNIQUE INDEX "daily_visit_stats_date_key" ON "daily_visit_stats"("date");
