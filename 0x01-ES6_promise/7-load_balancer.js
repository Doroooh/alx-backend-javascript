// Exporting a function called loadBalancer as the default export
// The function takes two arguments: chinaDownload and USDownload, which are both Promises
export default function loadBalancer(chinaDownload, USDownload) {
  /**
   * Promise.race() runs multiple promises concurrently and resolves or rejects
   * as soon as the first promise settles (either resolves or rejects).
   * In this case, it will return the result of the faster download (either from China or the US).
   */
  return Promise
    // Initiate the race between chinaDownload and USDownload promises
    .race([chinaDownload, USDownload])
    
    // Once the first promise settles (resolves or rejects), return the resolved value (res)
    .then((res) => res);
}
