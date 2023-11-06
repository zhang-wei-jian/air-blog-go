package routers

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"golangPackagekuangshen/models"
)

func HomeListRouter(r *gin.Engine) {

	userRouter := r.Group("/HomeList")
	{
		userRouter.GET("/", func(c *gin.Context) {
			user := models.User{}

			models.DB.Find(&user)
			//c.String(200, user)
			c.JSON(200, user)
		})
		userRouter.GET("/add", func(c *gin.Context) {

			user := models.User{Name: "haha"}
			result := models.DB.Create(&user)
			if result.Error != nil {
				fmt.Println(result.Error)
				return
			}
			c.JSON(200, "success")
		})
		userRouter.GET("/info", func(c *gin.Context) {
			c.String(200, "userinfo")
		})
	}
}
