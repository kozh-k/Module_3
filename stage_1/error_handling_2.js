function validateMessage(msg) {
   if (msg === null) {
      throw new ReferenceError("Message is null!");
   }

   if (typeof msg !== "string") {
      throw new TypeError(
         `Message should be of type string but was of type ${typeof msg}!`
      );
   }

   if (msg.length < 1 || msg.length > 255) {
      throw new RangeError(`Message contains ${msg.length} characters!`);
   }

   return msg.includes("<") && msg.includes(">") ? false : true;
}
