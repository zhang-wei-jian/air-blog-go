package routers

import (
	"bytes"
	"encoding/json"
	"io/ioutil"
	"net/http"

	"github.com/gin-gonic/gin"
)

func TestRouter(r *gin.Engine) {

	//r.Use()
	//r.Use(CORSMiddleware())

	r.POST("/post", func(c *gin.Context) {
		c.String(200, "post")

	})
	r.PUT("/post", func(c *gin.Context) {
		c.String(200, "PUT")

	})
	r.DELETE("/post", func(c *gin.Context) {
		c.String(200, "DELETE")

	})
	//静态
	//r.LoadHTMLGlob("templates/*")

	r.GET("/home", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "home",
		})
	})
	r.GET("/query/:haha", func(c *gin.Context) {

		haha := c.Param("haha")
		c.JSON(200, gin.H{
			"hahah": haha,
		})
	})
	r.POST("/json", func(c *gin.Context) {
		//b, _ := c.GetRawData()
		//var m map[string]interface{}
		//_ = json.Unmarshal(b, &m)
		//c.JSON(200, gin.H{
		//	"message": m,
		//})

	})

	r.GET("getdata", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "getData",
		})
	})

	r.GET("getData/:name", func(c *gin.Context) {
		name := c.Param("name")
		c.JSON(200, "ssss"+name)

	})
	r.GET("chat/", func(c *gin.Context) {
		// 设置请求URL
		//url := "https://api.example.com/data"
		//url := "https://v1.hitokoto.cn"
		url := "https://openchat.team/api/chat"
		requestData := map[string]interface{}{
			"model": map[string]interface{}{
				"id":         "openchat_v3.2_mistral",
				"name":       "OpenChat Aura",
				"maxLength":  24576,
				"tokenLimit": 8192,
			},
			"messages": []map[string]interface{}{
				{
					"role":    "user",
					"content": "你是什么模型",
				},
				{
					"role":    "assistant",
					"content": "我是一个基于GPT-4的人工智能语言模型。我被训练于大量文本数据上，可以回答问题、生成文本、提供建议等等。请问有什么我可以帮助你的吗？",
				},
				// 继续添加更多消息
			},
			"key":         "",
			"prompt":      " ",
			"temperature": 0.5,
		}
		// 将 requestData 转换为 JSON 格式
		jsonData, err := json.Marshal(requestData)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"error": err.Error(),
			})
			return
		}

		// 创建一个新的HTTP客户端
		client := &http.Client{}

		// 创建一个新的请求，设置请求方法和URL
		req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"error": err.Error(),
			})
			return
		}

		// 发起请求
		resp, err := client.Do(req)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"error": err.Error(),
			})
			return
		}
		defer resp.Body.Close()

		// 读取响应体
		body, err := ioutil.ReadAll(resp.Body)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"error": err.Error(),
			})
			return
		}
		println(body)

		// 写入响应
		c.Writer.Write(body)
	})

}

// CORSMiddleware 用于处理跨域请求
func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(http.StatusNoContent)
		} else {
			c.Next()
		}
	}
}
