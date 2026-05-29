# AGENTS.md

## Overview

Go 1.21 Gin web server with GORM. Single-binary app listening on `:8898`.

Module name is `golangPackagekuangshen` — use this in all import paths.

## Commands

```bash
go run main.go          # start server on :8898
go build -o tmp/main .  # build binary (matches .air.toml)
air                     # hot-reload dev server (cosmtrek/air, config in .air.toml)
```

No tests, linter, or CI configured.

## Project Structure

- `main.go` — entrypoint, registers all routers and starts Gin on `:8898`
- `routers/` — route registration functions, each file exports a `*Router(*gin.Engine)` func
- `models/` — GORM models; `core.go` holds the global `DB` connection (opened in `init()`)
- `systemLog/` — system info utilities (CPU count)
- `admin/` — **separate** `package main` with its own Gin server (port 8080), not wired into main app
- `xorm/` — empty placeholder, unused
- `templates/` — HTML templates (admin UI at `/`)

## Gotchas

- **Double `.go.go` extensions**: `routers/userRouter.go.go`, `routers/HomeListRouter.go.go`, `routers/testRouter.go.go` — these are the actual filenames; don't rename without updating all references.
- **Database**: set `DB_DSN` env var for MySQL, otherwise defaults to local SQLite (`airBlog.db`). Auto-migrates `User` and `Catalog` on startup.
- **Router files register directly on `*gin.Engine`**, not sub-routers returned. The pattern is `func XxxRouter(r *gin.Engine)` that calls `r.Group(...)` internally.
- **No `go.sum` cleanup** — `go mod tidy` before committing dependency changes.
- **CORS is wide open** (`Access-Control-Allow-Origin: *`) in `routers/testRouter.go.go:CORSMiddleware()`.
- **`admin/user.go`** has conflicting port comments (prints 8899, binds 8080).
