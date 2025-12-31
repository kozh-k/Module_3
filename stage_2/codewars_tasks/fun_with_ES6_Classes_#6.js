class File {
   #fullName;
   #contents;
   #lineIndex = 0;
   #charIndex = 0;

   constructor(fullName, contents) {
      this.#fullName = fullName;
      this.#contents = contents;
   }

   get fullName() {
      return this.#fullName;
   }

   get filename() {
      const parts = this.#fullName.split(".");
      return parts.slice(0, -1).join(".");
   }

   get extension() {
      const parts = this.#fullName.split(".");
      return parts[parts.length - 1];
   }

   getContents() {
      return this.#contents;
   }

   write(str) {
      if (this.#contents === "") {
         this.#contents = str;
      } else {
         this.#contents += "\n" + str;
      }
   }

   gets() {
      const lines = this.#contents.split("\n");

      if (this.#lineIndex >= lines.length) {
         return undefined;
      }

      return lines[this.#lineIndex++];
   }

   getc() {
      if (this.#charIndex >= this.#contents.length) {
         return undefined;
      }

      return this.#contents[this.#charIndex++];
   }
}
