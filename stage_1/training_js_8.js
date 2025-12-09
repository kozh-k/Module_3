function howManydays(month) {
   let daysOfMonth;

   switch (month) {
      case 2:
         daysOfMonth = 28;
         break;
      case 4:
      case 6:
      case 9:
      case 11:
         daysOfMonth = 30;
         break;
      default:
         daysOfMonth = 31;
   }

   return daysOfMonth;
}
