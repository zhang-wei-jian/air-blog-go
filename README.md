# Air Blog Go

Go + Gin + GORM 博客后端，自带管理后台 UI。

## 快速开始

```bash
# 克隆项目
git clone https://github.com/zhang-wei-jian/air-blog-go.git
cd air-blog-go

# 直接运行（自动使用 SQLite，无需配置数据库）
go run main.go
```

浏览器打开 http://localhost:8898 进入管理后台。

## 数据库配置

| 方式 | 说明 |
|------|------|
| SQLite（默认） | 无需配置，自动生成 `airBlog.db` 文件 |
| MySQL | 设置环境变量 `DB_DSN` |

**使用 MySQL：**

```bash
# Linux/Mac
export DB_DSN="user:password@tcp(host:3306)/dbname?charset=utf8mb4&parseTime=True&loc=Local"

# Windows PowerShell
$env:DB_DSN="user:password@tcp(host:3306)/dbname?charset=utf8mb4&parseTime=True&loc=Local"

go run main.go
```

## 项目结构

```
.
├── main.go              # 入口，启动 Gin 服务 :8898
├── routers/             # 路由注册
│   ├── catLogRouter.go  # 文章 CRUD API
│   ├── defaultRouter.go # 首页（返回管理后台 HTML）
│   ├── userRouter.go.go # 用户相关
│   └── testRouter.go.go # 测试路由 + CORS
├── models/              # GORM 模型
│   ├── core.go          # 数据库连接（init 自动初始化）
│   ├── catalog.go       # 文章模型
│   └── user.go          # 用户模型
├── templates/
│   └── index.html       # 管理后台页面（Tailwind + Vue 3）
└── AGENTS.md            # 开发指南
```

## API 接口

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/catlog` | 获取所有文章 |
| GET | `/catlog?id=1` | 获取单篇文章 |
| POST | `/catlog` | 创建文章 |
| PUT | `/catlog?id=1` | 更新文章 |
| DELETE | `/catlog?id=1` | 删除文章 |

## 部署

### Docker

```bash
docker build -t air-blog .
docker run -p 8898:8898 air-blog
```

### 直接部署

```bash
# 编译
go build -o air-blog .

# 运行（SQLite）
./air-blog

# 运行（MySQL）
DB_DSN="user:pass@tcp(host:3306)/db?charset=utf8mb4&parseTime=True&loc=Local" ./air-blog
```

### 使用 Air 热重载（开发）

```bash
go install github.com/cosmtrek/air@latest
air
```

## 技术栈

- **后端**: Go + Gin + GORM
- **前端**: Tailwind CSS + Vue 3 (CDN)
- **数据库**: SQLite / MySQL
