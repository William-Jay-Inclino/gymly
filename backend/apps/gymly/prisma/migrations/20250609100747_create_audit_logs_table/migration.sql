-- CreateTable
CREATE TABLE "audit_logs" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "table" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "reference_id" TEXT,
    "metadata" JSONB,
    "ip_address" TEXT,
    "device_info" JSONB,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notes" TEXT,

    CONSTRAINT "audit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "audit_logs_username_idx" ON "audit_logs"("username");

-- CreateIndex
CREATE INDEX "audit_logs_table_idx" ON "audit_logs"("table");
