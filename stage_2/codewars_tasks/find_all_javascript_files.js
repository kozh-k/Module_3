function findAllJavascriptFiles(folder, callback) {
   const result = [];

   folder.size((length) => {
      if (length === 0) {
         return callback(result);
      }

      let counter = 0;

      for (let i = 0; i < length; i++) {
         folder.read(i, (item) => {
            if (typeof item === "string") {
               if (item.endsWith(".js")) {
                  result.push(item);
               }

               counter++;

               if (counter === length) {
                  callback(result);
               }
            } else {
               findAllJavascriptFiles(item, (arr) => {
                  result.push(...arr);
                  counter++;

                  if (counter === length) {
                     callback(result);
                  }
               });
            }
         });
      }
   });
}
