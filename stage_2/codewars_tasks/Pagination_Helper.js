class PaginationHelper {
   constructor(collection, itemsPerPage) {
      this.collection = collection;
      this.itemsPerPage = itemsPerPage;
   }

   itemCount() {
      return this.collection.length;
   }

   pageCount() {
      return Math.ceil(this.collection.length / this.itemsPerPage);
   }

   pageItemCount(pageIndex) {
      if (pageIndex < 0 || pageIndex >= this.pageCount()) {
         return -1;
      }

      const start = pageIndex * this.itemsPerPage;
      const end = Math.min(start + this.itemsPerPage, this.collection.length);

      return end - start;
   }

   pageIndex(itemIndex) {
      if (itemIndex < 0 || itemIndex >= this.collection.length) {
         return -1;
      }

      return Math.floor(itemIndex / this.itemsPerPage);
   }
}
