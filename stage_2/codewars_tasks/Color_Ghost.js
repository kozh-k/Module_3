let Ghost = function () {
   const COLORS = ["white", "yellow", "purple", "red"];

   this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
};
