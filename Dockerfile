# 设置基础镜像
FROM golang:latest

# 设置工作目录
WORKDIR /app

# 复制代码文件到容器中
COPY . .

# 监听代码文件的变化并自动编译和运行
CMD go run main.go
