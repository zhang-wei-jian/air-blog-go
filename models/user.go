package models

type User struct {
	Id   int    `gorm:"column:id" json:"id"`
	Name string `gorm:"column:name" json:"name"`
}

func (u User) TableName() string {
	return "user"
}
