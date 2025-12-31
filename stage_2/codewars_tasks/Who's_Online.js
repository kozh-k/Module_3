const whosOnline = (friends) => {
   const friendsStatuses = {
      online: [],
      offline: [],
      away: [],
   };

   friends.forEach((friend) => {
      if (friend.status === "online" && friend.lastActivity <= 10) {
         friendsStatuses.online.push(friend.username);
      } else if (friend.status === "offline") {
         friendsStatuses.offline.push(friend.username);
      } else {
         friendsStatuses.away.push(friend.username);
      }
   });

   for (key in friendsStatuses) {
      if (friendsStatuses[key].length === 0) {
         delete friendsStatuses[key];
      }
   }

   return friendsStatuses;
};
