export function isObjectEmpty(obj: any): boolean {
    for (const key in obj) {
      if (obj[key] === null || obj[key] === undefined || obj[key] === '') {
        return true;
      }
      if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        if (isObjectEmpty(obj[key])) {
          return true;
        }
      }
      if (Array.isArray(obj[key])) {
        for (const item of obj[key]) {
          if (typeof item === 'object') {
            if (isObjectEmpty(item)) {
              return true;
            }
          } else if (item === null || item === undefined || item === '') {
            return true;
          }
        }
      }
    }
    return false;
  }