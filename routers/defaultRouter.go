package routers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func DefaultRouter(r *gin.Engine) {
	defaultRouter := r.Group("/")
	{
		defaultRouter.GET("/", func(c *gin.Context) {
			c.HTML(http.StatusOK, "index.html", nil)
		})
	}
}
