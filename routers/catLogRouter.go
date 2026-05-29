package routers

import (
	"golangPackagekuangshen/models"

	"github.com/gin-gonic/gin"
)

func CatLogRouter(r *gin.Engine) {

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
					"error": err.Error(),
				})
				return
			}
			models.DB.Create(&body)
			c.JSON(200, body)
		})

		catLogRouter.PUT("", func(c *gin.Context) {
			id := c.Query("id")
			if id == "" {
				c.JSON(400, gin.H{"error": "缺少 id 参数"})
				return
			}

			var existing models.Catalog
			if err := models.DB.First(&existing, id).Error; err != nil {
				c.JSON(404, gin.H{"error": "文章不存在"})
				return
			}

			body := models.Catalog{}
			if err := c.ShouldBindJSON(&body); err != nil {
				c.JSON(400, gin.H{
					"error": err.Error(),
				})
				return
			}

			models.DB.Model(&existing).Updates(body)
			c.JSON(200, existing)
		})

		catLogRouter.DELETE("", func(c *gin.Context) {
			id := c.Query("id")
			if id == "" {
				c.JSON(400, gin.H{"error": "缺少 id 参数"})
				return
			}

			result := models.DB.Delete(&models.Catalog{}, id)
			if result.RowsAffected == 0 {
				c.JSON(404, gin.H{"error": "文章不存在"})
				return
			}

			c.JSON(200, gin.H{"message": "删除成功"})
		})
	}

}
