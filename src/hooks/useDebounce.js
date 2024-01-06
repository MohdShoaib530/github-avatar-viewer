function useDebounce(cb, delay = 500) {
    let timeoutRef;
  
    return function (...args) {
      clearTimeout(timeoutRef)
      timeoutRef = setTimeout(() => {
        cb(...args)
      }, delay)
    }
  }
  
  export default useDebounce