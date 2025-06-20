-- CreateTable
CREATE TABLE "site_profiles" (
    "id" TEXT NOT NULL,
    "site_title" TEXT NOT NULL,
    "site_subtitle" TEXT,
    "site_slogan" TEXT,
    "logo_url" TEXT,
    "owner_name" TEXT,
    "owner_avatar_url" TEXT,
    "owner_signature" TEXT,
    "owner_tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "about_me_content" TEXT,
    "total_visits" BIGINT NOT NULL DEFAULT 0,

    CONSTRAINT "site_profiles_pkey" PRIMARY KEY ("id")
);
