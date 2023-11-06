package routers

import (
	"golangPackagekuangshen/models"

	"github.com/gin-gonic/gin"
)

func UserRouter(r *gin.Engine) {
	userRouter := r.Group("/user")

	userRouter.GET("/", func(c *gin.Context) {

		user := []models.User{}

		// models.DB.Find(&user)

		models.DB.Where("id=?", 1).First(&user)
		c.JSON(200, user)

	})

	userRouter.GET("/add", func(c *gin.Context) {

		user := models.User{
			Name: "bbb",
		}

		models.DB.Create(&user)
		c.String(200, "bbb")

	})

}
