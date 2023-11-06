package systemLog

import (
	"fmt"
	"sync"
	"time"
)

var wg sync.WaitGroup

func Test() {

	wg.Add(1)
	go Test2()
	for i := 0; i < 5; i++ {
		fmt.Println("主线程", i)

	}
	wg.Wait()
	//time.Sleep(time.Millisecond * 600)

}
func Test2() {
	for i := 0; i < 5; i++ {
		fmt.Println("携程执行", i)
		time.Sleep(time.Millisecond * 100)
	}
	wg.Done()

}
