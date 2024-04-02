export const getButton = async (person,  setOptionFilters , filters) => {
   console.log(Array.isArray(person));
   
   const speciesList = person.flatMap((character) => character.species);
   return speciesList
   
   console.log(speciesList);
 };
   // if(person.length > 0){
   //     await person.map((person) => {
   //       console.loh(character)
   //     setOptionFilters([...person]);
   //    });
   //  }
  