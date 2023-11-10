package models

import (
	"database/sql/driver"
	"encoding/json"
)

type Tags []string

type Catalog struct {
	ID          uint   `json:"id"`
	Title       string `json:"title" gorm:"column:title"`
	PubDate     string `json:"pubDate" gorm:"column:pubDate"`
	Description string `json:"description" gorm:"column:description"`
	Author      string `json:"author" gorm:"column:author"`
	Tags        Tags   `json:"tags" gorm:"column:tags"`
	Theme       string `json:"theme" gorm:"column:theme"`
	Featured    bool   `json:"featured"`
	Cover       struct {
		URL    string `json:"url" gorm:"column:cover_url"`
		Square string `json:"square" gorm:"column:cover_square"`
		Alt    string `json:"alt" gorm:"column:cover_alt"`
	} `json:"cover" gorm:"embedded"`
	Content string `json:"content" gorm:"column:content"`
}

// Value 实现方法
func (t Tags) Value() (driver.Value, error) {
	return json.Marshal(t)
}

// Scan 实现方法
func (t *Tags) Scan(value interface{}) error {
	if data, ok := value.([]byte); ok {
		return json.Unmarshal(data, t)
	}
	return nil
}

func (c Catalog) TableName() string {
	return "catlog"
}
