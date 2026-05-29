package models

import (
	"os"

	"github.com/glebarez/sqlite"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

var DB *gorm.DB
var err error

func init() {
	dsn := os.Getenv("DB_DSN")

	if dsn != "" {
		// MySQL
		DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{
			Logger: logger.Default.LogMode(logger.Info),
		})
	} else {
		// SQLite (本地文件，无需额外配置)
		DB, err = gorm.Open(sqlite.Open("airBlog.db"), &gorm.Config{
			Logger: logger.Default.LogMode(logger.Info),
		})
	}

	if err != nil {
		panic("数据库连接失败: " + err.Error())
	}

	DB.AutoMigrate(&User{})
	DB.AutoMigrate(&Catalog{})

	if dsn != "" {
		println("已连接 MySQL 数据库")
	} else {
		println("已连接 SQLite (airBlog.db)")
	}
}
