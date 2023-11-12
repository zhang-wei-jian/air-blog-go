package main

import (
	"encoding/json"
	"fmt"
	"golangPackagekuangshen/routers"
	"golangPackagekuangshen/systemLog"
	"io/ioutil"
	"log"
	"os"
	"os/exec"

	"github.com/gin-gonic/gin"
	resty2 "github.com/go-resty/resty/v2"
)

func main() {

	//systemLog.Test()
	r := gin.Default()

	r.Use(routers.CORSMiddleware())
	// r.Use(cors.Default())

	routers.DefaultRouter(r)
	routers.UserRouter(r)
	routers.TestRouter(r)
	routers.HomeListRouter(r)
	routers.CatLogRouter(r)

	systemLog.CpuLog()

	println("运行在了 http://localhost:8898")

	r.Run(":8898")

}

// 遍历当前文件目录ls
func redPath() {
	files, err := ioutil.ReadDir(".")
	if err != nil {
		fmt.Println("无法读取当前文件夹的文件:", err)
		return
	}

	fmt.Println("当前文件夹的文件列表:")
	for _, file := range files {
		fmt.Println(file.Name())
	}

}

// 无论如何都是当前路径
func getCurrentFilePath() (string, error) {
	file, err := exec.LookPath(os.Args[0])
	if err != nil {
		return "", err
	}
	path, err := exec.LookPath(file)
	if err != nil {
		return "", err
	}
	return path, nil
}

func resty() {
	// Create a Resty Client

	client := resty2.New()

	resp, err := client.R().
		EnableTrace().
		Get("https://v1.hitokoto.cn/")
	if err != nil {
		log.Fatal("请求出错", err)
	}

	var res hitokoto

	err = json.Unmarshal(resp.Body(), &res)
	fmt.Println(res)

}

type hitokoto struct {
	hitokoto string
}
