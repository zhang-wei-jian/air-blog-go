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

	catLogRouter.GET("/", func(c *gin.Context) {
		catlog := []models.Catalog{}
		models.DB.Find(&catlog)
		c.JSON(200, catlog)
	})

	catLogRouter.POST("/", func(c *gin.Context) {

		body := models.Catalog{}
		if err := c.ShouldBindJSON(&body); err != nil {
			c.JSON(400, gin.H{
				"error": err,
			})
			return
		}
		// catlog := models.Catalog{
		// 	Title: "aaa",
		// }
		models.DB.Create(&body)
		c.JSON(200, body)
	})
}
