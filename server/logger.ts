
const logger = {
  info(...data: any[]) {
    console.info(...data)
  },
  warn(...data: any[]) {
    console.warn(...data)
  },
  debug(...data: any[]) {
    console.debug(...data)
  },
  error(...data: any[]) {
    console.error(...data)
  }
}

export default logger;
