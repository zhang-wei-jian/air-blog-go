package routers

import "github.com/gin-gonic/gin"

func DefaultRouter(r *gin.Engine) {
	defaultRouter := r.Group("/")
	{
		defaultRouter.GET("/", func(c *gin.Context) {
			c.String(200, "首页")
		})
		defaultRouter.GET("/news", func(c *gin.Context) {
			c.String(200, "新闻")
		})
	}
}
