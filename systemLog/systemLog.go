package systemLog

import (
	"fmt"
	"runtime"
)

func CpuLog() {
	cpuNum := runtime.NumCPU()
	fmt.Println("CPU核心是", cpuNum)
}
