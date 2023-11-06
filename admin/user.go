package main

import "github.com/gin-gonic/gin"

func main() {

	r := gin.Default()
	r.GET("/user", func(c *gin.Context) {
		println("sssssss")
	})

	println("运行在了 http://localhost:8899")

	r.Run(":8080")
}
