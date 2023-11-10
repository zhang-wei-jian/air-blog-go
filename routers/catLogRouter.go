package routers

import (
	"golangPackagekuangshen/models"

	"github.com/gin-gonic/gin"
)

func CatLogRouter(r *gin.Engine) {

	// r.GET("/catlog", func(c *gin.Context) {

	// 	catlog := []models.Catalog{}
	// 	models.DB.Find(&catlog)
	// 	c.JSON(200, catlog)
	// })

	catLogRouter := r.Group("/catlog")
	{
		catLogRouter.GET("", func(c *gin.Context) {

			id := c.Query("id")

			if id != "" {
				catlog := models.Catalog{}
				models.DB.First(&catlog, id)

				c.JSON(200, catlog)
				return

			}

			catlog := []models.Catalog{}
			models.DB.Find(&catlog)
			c.JSON(200, catlog)
		})

		catLogRouter.POST("", func(c *gin.Context) {
			body := models.Catalog{}
			if err := c.ShouldBindJSON(&body); err != nil {
				c.JSON(400, gin.H{
					"error": err,
				})
				return
			}
			models.DB.Create(&body)
			c.JSON(200, body)
		})
	}

}
