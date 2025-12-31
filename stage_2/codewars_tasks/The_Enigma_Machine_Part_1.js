const Plugboard = function (wires) {
   wires = wires || "";

   const wiresSet = new Set(wires);
   const hasWiresRepetitions = wires !== [...wiresSet].join("");

   if (
      typeof wires !== "string" ||
      wires.length % 2 ||
      wires.length > 20 ||
      hasWiresRepetitions
   ) {
      throw new Error();
   }

   this.wires = wires;

   this.process = function (wire) {
      if (this.wires.includes(wire)) {
         const indexOfWire = this.wires.indexOf(wire);

         if (indexOfWire % 2 !== 0) {
            return this.wires[indexOfWire - 1];
         }

         return this.wires[indexOfWire + 1];
      }

      return wire;
   };
};
